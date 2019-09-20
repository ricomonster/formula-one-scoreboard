// dependencies
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const FormulaOneContext = createContext({});

export const FormulaOneProvider = ({ children }) => {
  // error indicator
  // loading indicator
  const [loading, setLoading] = useState(true);

  // stores the data to be used
  const [event, setEvent] = useState({});
  const [freePractice, setFreePractice] = useState([]);
  const [formulaOneFive, setFormulaOneFive] = useState([]);
  const [qualifyingResult, setQualifyingResult] = useState({});
  const [raceResult, setRaceResult] = useState({});
  const [track, setTrack] = useState({});

  // Fetches the latest/active Grand Prix Race event.
  const getActiveGrandPrix = async () => {
    // set loading
    setLoading(true);

    // let's get our data from ESPN!
    const response = await fetch(
      `https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=racing&league=f1&region=ph&lang=en&contentorigin=espn&tz=Europe/London`,
      {
        method: 'GET',
      }
    );

    // wait for the response
    const json = await response.json();

    // parse out the data that we have
    if (!json) {
      // set error
    }

    // unset loading
    setLoading(false);

    // let's dissect this huge ass data
    const formulaOne = json.sports[0].leagues[0];

    // loop the events so we can extract the data for 'Free Practice', 'Qualifying', and 'Main Race'
    Object.keys(formulaOne.events).map(index => {
      // simplify
      const raceEvent = formulaOne.events[index];

      // determine the race type
      switch (raceEvent.competitionType.abbreviation) {
        case 'FP1':
        case 'FP2':
        case 'FP3':
          freePractice[raceEvent.competitionType.abbreviation] = {
            date: raceEvent.date,
            details: raceEvent.competitionType,
            status: raceEvent.fullStatus,
          };
          break;

        case 'Qual':
          setQualifyingResult({
            date: raceEvent.date,
            details: raceEvent.competitionType,
            status: raceEvent.fullStatus,
          });
          break;

        case 'Race':
          setRaceResult({
            date: raceEvent.date,
            details: raceEvent.competitionType,
            status: raceEvent.fullStatus,
          });
          break;

        default:
          break;
      }
    });

    // get the event id
    const eventId = formulaOne.events[0].id;

    // get more details from the race
    getRaceDetails(eventId);
  };

  // Fetches more data about the race.
  const getRaceDetails = async eventId => {
    setLoading(true);

    // let's get our data from ESPN!
    const response = await fetch(
      `https://site.web.api.espn.com/apis/site/v2/sports/racing/f1/racepackage?region=ph&lang=en&contentorigin=espn&event=${eventId}`,
      {
        method: 'GET',
      }
    );

    // wait for the response
    const json = await response.json();

    // no result?
    if (!json) {
      // do something.
    }

    // unset loading
    setLoading(false);
    // console.log('race head', json);

    // extract data
    const { positions, eventInfo, racestrip } = json;

    // loop the positions
    if (positions) {
      Object.keys(positions).map(index => {
        const raceEvent = positions[index];

        // case the title
        switch (raceEvent.titleTab) {
          case 'Free Practice 1':
            freePractice['FP1'].results = raceEvent.positions;
            break;

          case 'Free Practice 2':
            freePractice['FP2'].results = raceEvent.positions;
            break;

          case 'Free Practice 3':
            freePractice['FP3'].results = raceEvent.positions;
            break;

          default:
            break;
        }
      });
    }

    // update free practice details
    setFreePractice(freePractice);

    // set event details
    setEvent(eventInfo.venue);

    // set track details
    setTrack(racestrip);
  };

  return (
    <FormulaOneContext.Provider
      value={{
        event,
        freePractice,
        formulaOneFive,
        getActiveGrandPrix,
        loading,
        qualifyingResult,
        raceResult,
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
