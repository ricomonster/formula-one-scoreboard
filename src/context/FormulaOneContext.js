// dependencies
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormulaOneContext = createContext({});

export const FormulaOneProvider = ({ children }) => {
  const [fetching, setFetching] = useState(false);

  // stores the data to be used
  const [event, setEvent] = useState({});
  const [freePractice, setFreePractice] = useState([]);
  const [formulaOneFive, setFormulaOneFive] = useState([]);
  const [grandPrix, setGrandPrix] = useState({});
  const [qualifying, setQualifying] = useState({});
  const [race, setRace] = useState({});
  const [track, setTrack] = useState({});

  // temporary data storage
  let activeEvent = event;
  let freePracticeData = freePractice;
  let qualifyingData = qualifying;
  let raceData = race;

  // Fetches the active/current F1 Grand Prix Event
  const getActiveGrandPrix = async () => {
    // set that we're fetching
    setFetching(true);

    // let's get the current Formula One Event from ESPN's API
    const response = await fetch(
      `https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=racing&league=f1&region=ph&lang=en&contentorigin=espn&tz=Europe/London`,
      { method: 'GET' }
    );

    // let's wait for the response
    const json = await response.json();

    // no results?
    if (!json) {
      // no response from ESPN or no connection
      throw Error('No response or could not connect to source.');
    }

    // let's dissect the data that we have
    const { events } = json.sports[0].leagues[0];

    // loop the events
    Object.keys(events).forEach(key => {
      // get the event data
      const raceEvent = events[key];
      const { date, competitionType, fullStatus } = raceEvent;

      // we just need to get some data from this node so let's get it
      const status = {
        abbreviation: competitionType.abbreviation,
        date: date,
        name: competitionType.text,
        state: fullStatus.type.state,
      };

      // current event running?
      if (status.state === 'in') {
        activeEvent = status;
      }

      // check if the event is upcoming
      if ((!event || !event.name) && status.state === 'pre') {
        // store event event
        activeEvent = status;
      }

      // case out what type of event is this
      switch (competitionType.abbreviation) {
        case 'FP1':
        case 'FP2':
        case 'FP3':
          // set the data
          freePracticeData[competitionType.abbreviation] = {
            ...freePracticeData[competitionType.abbreviation],
            status,
          };

          break;

        case 'Qual':
          qualifyingData = { ...qualifyingData, status };
          break;

        case 'Race':
          raceData = { ...raceData, status };
          break;

        default:
          console.log(
            `Unknown competition type: ${competitionType.abbreviation}`
          );
          break;
      }
    });

    // still no event?
    if (!event || !event.name) {
      // get the race as we assume this grand prix already complete
      activeEvent = raceData.status;
    }

    // let's fetch more details about the event
    getRaceEventDetails(events[0].id);
  };

  // Fetch additional and in-depth details of the race
  const getRaceEventDetails = async eventId => {
    // get our data from ESPN
    const response = await fetch(
      `https://site.web.api.espn.com/apis/site/v2/sports/racing/f1/racepackage?region=ph&lang=en&contentorigin=espn&event=${eventId}`,
      { method: 'GET' }
    );

    // wait for the response
    const json = await response.json();

    // no results?
    if (!json) {
      throw Error('No response from event.');
    }

    // extract data
    const { positions, eventInfo, racestrip } = json;

    // extract data from event info
    const { address, circuit, countryFlag } = eventInfo.venue;

    // get the data necessary data for the grand prix and the race track
    const grandPrixData = {
      address: address,
      countryFlag: countryFlag,
      endDate: racestrip.endDate,
      name: racestrip.name,
      season: racestrip.season,
      startDate: racestrip.date,
    };

    // track/circuit data
    const trackData = {
      direction: circuit.direction,
      distance: circuit.distance,
      capacity: circuit.capacity,
      established: circuit.established,
      laps: circuit.laps,
      length: circuit.length,
      map: circuit.diagrams[0].href,
      name: circuit.fullName,
      recordLapHolder: {
        flag: circuit.fastestLapDriver.flag,
        headshot: circuit.fastestLapDriver.headshot,
        lapTime: circuit.fastestLapDriver.time,
        name: circuit.fastestLapDriver.fullName,
        year: circuit.fastestLapDriver.year,
      },
      turns: circuit.turns,
      type: circuit.type,
    };

    // loop the positions
    if (positions) {
      Object.keys(positions).forEach(index => {
        const raceEvent = positions[index];

        // case the title
        switch (raceEvent.titleTab) {
          case 'Free Practice 1':
            freePracticeData['FP1'] = {
              ...freePracticeData['FP1'],
              positions: sortPositions(raceEvent.positions),
            };
            break;

          case 'Free Practice 2':
            freePracticeData['FP2'] = {
              ...freePracticeData['FP2'],
              positions: sortPositions(raceEvent.positions),
            };
            break;

          case 'Free Practice 3':
            freePracticeData['FP3'] = {
              ...freePracticeData['FP3'],
              positions: sortPositions(raceEvent.positions),
            };
            break;

          case 'Qualifying':
            qualifyingData = {
              ...qualifyingData,
              positions: sortPositions(raceEvent.positions),
            };
            break;

          case 'Race':
            raceData = {
              ...raceData,
              positions: sortPositions(raceEvent.positions),
            };
            break;

          default:
            break;
        }
      });
    }

    // TODO: setup the Formula 1.5 lineup
    console.log('active event', event);

    // set data
    setGrandPrix(grandPrixData);
    setTrack(trackData);

    // set temporary data
    setEvent(activeEvent);
    setFreePractice(freePracticeData);
    setQualifying(qualifyingData);
    setRace(raceData);

    // unset fetching
    setFetching(false);
  };

  // Sorts and fetches only the necessary info from the array data
  const sortPositions = positions => {
    let newPositions = [];

    Object.keys(positions).forEach(key => {
      // store position
      const position = positions[key];

      // set the new data
      newPositions.push({
        driver: {
          abbreviation: position.athleteInfo.abbreviation,
          flag: position.athleteInfo.flag,
          firstName: position.athleteInfo.firstName,
          headshot: position.athleteInfo.headshot,
          lastName: position.athleteInfo.lastName,
          name: position.athleteInfo.displayName,
        },
        liveOrder: position.liveOrder,
        order: position.order,
        race: {
          behindTime: position.stateInfo.behindTime,
          completed: position.stateInfo.completed,
          gapToLeader: position.stateInfo.fomGapToLeader,
          laps: position.stateInfo.lapsCompleted,
          pits: position.stateInfo.pitsTaken,
          status: position.stateInfo.displayValue,
          time: position.stateInfo.totalTime,
        },
        team: {
          color: position.athleteInfo.teamColor,
          name: position.athleteInfo.team,
        },
      });
    });

    return newPositions;
  };

  return (
    <FormulaOneContext.Provider
      value={{
        event,
        fetching,
        freePractice,
        formulaOneFive,
        getActiveGrandPrix,
        grandPrix,
        qualifying,
        race,
        track,
      }}
    >
      {children}
    </FormulaOneContext.Provider>
  );
};

FormulaOneProvider.propTypes = {
  children: PropTypes.any,
};

export default FormulaOneContext;
