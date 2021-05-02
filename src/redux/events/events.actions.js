import {
  EVENTS_ACTIVE,
  EVENTS_FREE_PRACTICE_1,
  EVENTS_FREE_PRACTICE_2,
  EVENTS_FREE_PRACTICE_3,
  EVENTS_QUALIFYING,
  EVENTS_RACE,
  EVENTS_UPCOMING,
} from './events.type';

import {
  standingsFreePractice1,
  standingsFreePractice2,
  standingsFreePractice3,
  standingsQualifying,
  standingsRace,
} from '../standings/standings.actions';

export const eventsActive = (payload) => ({
  type: EVENTS_ACTIVE,
  payload,
});

export const eventsFreePractice1 = (payload) => (dispatch) => {
  const newPayload = payload;

  if (newPayload.standings && newPayload.standings.length > 0) {
    dispatch(standingsFreePractice1(newPayload.standings));
    delete newPayload.standings;
  }

  dispatch({
    type: EVENTS_FREE_PRACTICE_1,
    payload: newPayload,
  });
};

export const eventsFreePractice2 = (payload) => (dispatch) => {
  const newPayload = payload;

  if (newPayload.standings && newPayload.standings.length > 0) {
    dispatch(standingsFreePractice2(newPayload.standings));
    delete newPayload.standings;
  }

  dispatch({
    type: EVENTS_FREE_PRACTICE_2,
    payload: newPayload,
  });
};

export const eventsFreePractice3 = (payload) => (dispatch) => {
  const newPayload = payload;

  if (newPayload.standings && newPayload.standings.length > 0) {
    dispatch(standingsFreePractice3(newPayload.standings));
    delete newPayload.standings;
  }

  dispatch({
    type: EVENTS_FREE_PRACTICE_3,
    payload: newPayload,
  });
};

export const eventsQualifying = (payload) => (dispatch) => {
  const newPayload = payload;

  if (newPayload.standings && newPayload.standings.length > 0) {
    dispatch(standingsQualifying(newPayload.standings));
    delete newPayload.standings;
  }

  dispatch({
    type: EVENTS_QUALIFYING,
    payload: newPayload,
  });
};

export const eventsRace = (payload) => (dispatch) => {
  const newPayload = payload;

  if (newPayload.standings && newPayload.standings.length > 0) {
    dispatch(standingsRace(newPayload.standings));
    delete newPayload.standings;
  }

  dispatch({
    type: EVENTS_RACE,
    payload: newPayload,
  });
};

export const eventsUpcoming = (payload) => ({
  type: EVENTS_UPCOMING,
  payload,
});
