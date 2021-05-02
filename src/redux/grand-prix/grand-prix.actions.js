import axios from 'axios';
import moment from 'moment';

import {
  GRAND_PRIX,
  GRAND_PRIX_ERROR,
  GRAND_PRIX_LOADING,

  GRAND_PRIX_CIRCUIT,
} from './grand-prix.types';

import {
  eventsActive,
  eventsFreePractice1,
  eventsFreePractice2,
  eventsFreePractice3,
  eventsQualifying,
  eventsRace,
  eventsUpcoming,
} from '../events/events.actions';

// Team Details
import teams from '../../config/constants/teams';

const { error: consoleError } = console;

// Session state mapping
const sessionStatus = {
  in: {
    state: 'on-going',
    lapState: 'lapRunningAt',
  },
  pre: {
    state: 'upcoming',
    lapState: 'currentLap',
  },
  post: {
    state: 'done',
    lapState: 'lapsDone',
  },
};

const raceStatus = {
  STATUS_ON_TRACK: 'On Track',
  STATUS_RETIRED: 'Out',
};

export const grandPrix = (payload) => ({
  type: GRAND_PRIX,
  payload,
});

export const grandPrixError = (payload) => ({
  type: GRAND_PRIX_ERROR,
  payload,
});

export const grandPrixLoading = (payload) => ({
  type: GRAND_PRIX_LOADING,
  payload,
});

export const grandPrixCircuit = (payload) => ({
  type: GRAND_PRIX_CIRCUIT,
  payload,
});

export const getGrandPrixAction = () => async (dispatch) => {
  try {
    dispatch(grandPrixLoading(true));

    // Fetch the active/upcoming grand prix
    const { data: grandPrixEvent } = await axios.get('https://site.web.api.espn.com/apis/v2/scoreboard/header', {
      params: {
        sport: 'racing',
        league: 'f1',
        contentorigin: 'espn',
      },
    });

    // Let's just get the event id
    const { events } = grandPrixEvent.sports[0].leagues[0];
    const { id: eventId } = events[0];

    // Perform another call to fetch the event details
    const { data: grandPrixDetails } = await axios.get('https://site.web.api.espn.com/apis/site/v2/sports/racing/f1/racepackage', {
      params: {
        contentorigin: 'espn',
        event: eventId,
      },
    });

    // Now we can extract it more and pass it to some actions
    const { racestrip, eventInfo, positions } = grandPrixDetails;
    const { venue } = eventInfo;

    // Let's build the data of the Grand Prix
    const grandPrixInfo = {
      name: racestrip.name,
      shortName: racestrip.shortName,
      startDateTime: moment(racestrip.start).format(),
      endDateTime: moment(racestrip.endDate).format(),
      season: racestrip.season,
    };

    // Circuit Details
    const grandPrixCircuitDetails = {
      name: venue.fullName,
      fullName: venue.circuit.fullName,
      address: venue.address,
      flag: {
        url: venue.countryFlag.href,
        alt: venue.countryFlag.alt,
      },
      turns: venue.circuit.turns,
      length: venue.length,
      direction: venue.circuit.direction.toLowerCase(),
    };

    // We need to extract the data of Free Practices
    const freePractices = [];
    let qualifying = {};
    let race = {};
    let activeEvent = {};
    let upcomingEvent = {};

    // Let's get the free practice events
    racestrip.sessionDetail.forEach((session) => {
      const { state, lapState } = sessionStatus[session.gameState];
      const laps = session.currentLap.split('/');

      switch (session.titleTab) {
        case 'Free Practice 1':
        case 'Free Practice 2':
        case 'Free Practice 3': {
          const freePractice = {
            name: session.titleTab,
            startDateTime: moment(session.competitionDate).format(),
            state,
            [lapState]: laps[0],
          };

          freePractices[session.titleTab] = freePractice;

          if (state === 'on-going') {
            activeEvent = freePractice;
          }

          if (state === 'upcoming') {
            upcomingEvent = freePractice;
          }
          break;
        }

        case 'Qualifying':
          qualifying = {
            startDateTime: moment(session.competitionDate).format(),
            state,
            [lapState]: laps[0],
          };

          if (state === 'on-going') {
            activeEvent = {
              name: 'Qualifying',
              ...qualifying,
            };
          }

          if (state === 'upcoming') {
            upcomingEvent = {
              name: 'Qualifying',
              ...qualifying,
            };
          }

          break;

        case 'Race':
          race = {
            startDateTime: moment(session.competitionDate).format(),
            state,
            [lapState]: laps[0],
            totalLaps: laps[1] ? laps[1] : 0,
          };

          if (state === 'on-going') {
            activeEvent = {
              name: 'Race',
              ...race,
            };
          }

          if (state === 'upcoming') {
            upcomingEvent = {
              name: 'Race',
              ...race,
            };
          }

          break;

        default:
          consoleError(`Unknown session type: ${session.titleTab}`);
          break;
      }
    });

    // Let's sort the standings
    positions.forEach((event) => {
      const standings = [];

      if (event.positions && event.positions.length > 0) {
        event.positions.forEach((position) => {
          const { athleteInfo, stateInfo } = position;
          const { headshot, flag } = athleteInfo;

          const standing = {
            driver: {
              lastName: athleteInfo.firstName,
              firstName: athleteInfo.lastName,
              displayName: athleteInfo.displayName,
              shortName: athleteInfo.shortName,
              abbreviation: athleteInfo.abbreviation,
              headshot: {
                url: headshot && headshot.href ? headshot.href : '',
                alt: headshot && headshot.alt ? headshot.alt : '',
              },
              flag: {
                url: flag && flag.href ? flag.href : '',
                alt: flag && flag.alt ? flag.href : '',
              },
            },
            team: {
              ...teams[athleteInfo.team],
              color: '00D2BE',
            },
            race: {
              lapsCompleted: stateInfo.lapsCompleted,
              place: stateInfo.place,
              totalTime: stateInfo.totalTime || 0,
              status: raceStatus[stateInfo.name],
            },
          };

          if (stateInfo.fomGapToLeader) {
            standing.race = {
              ...standing.race,
              gapToLeader: stateInfo.fomGapToLeader,
            };
          }

          // This will show if the event is on-going
          if (stateInfo.liveOrder) {
            standing.race = {
              ...standing.race,
              liveOrder: position.liveOrder,
            };
          }

          // Event related info
          if (event.titleTab === 'Race') {
            // console.log('pos', position);

            standing.race = {
              ...standing.race,
              pitsTaken: stateInfo.pitsTaken || 0,
            };

            if (stateInfo.behindTime) {
              standing.race = {
                ...standing.race,
                behindTime: stateInfo.behindTime,
              };
            }
          }

          standings.push(standing);
        });
      }

      // Now where are we going to push this?
      switch (event.titleTab) {
        case 'Free Practice 1':
        case 'Free Practice 2':
        case 'Free Practice 3':
          freePractices[event.titleTab] = {
            ...freePractices[event.titleTab],
            standings,
          };
          break;

        case 'Qualifying':
          qualifying = {
            ...qualifying,
            standings,
          };
          break;

        case 'Race':
          race = {
            ...race,
            standings,
          };
          break;

        default:
          consoleError(`Unknown session type: ${event.titleTab}`);
          break;
      }
    });

    console.log('UPCOMING :: ', upcomingEvent);
    console.log('ACTIVE :: ', activeEvent);

    // Set the events
    if (activeEvent && activeEvent.state) {
      dispatch(eventsActive(activeEvent));
    }

    if (upcomingEvent && upcomingEvent.startDateTime) {
      dispatch(eventsUpcoming(upcomingEvent));
    }

    dispatch(eventsFreePractice1(freePractices['Free Practice 1']));
    dispatch(eventsFreePractice2(freePractices['Free Practice 2']));
    dispatch(eventsFreePractice3(freePractices['Free Practice 3']));
    dispatch(eventsQualifying(qualifying));
    dispatch(eventsRace(race));

    dispatch(grandPrix(grandPrixInfo));
    dispatch(grandPrixCircuit(grandPrixCircuitDetails));
    dispatch(grandPrixLoading(false));
  } catch (error) {
    consoleError(error);
    dispatch(grandPrixError(error));
    dispatch(grandPrixLoading(false));
  }
};
