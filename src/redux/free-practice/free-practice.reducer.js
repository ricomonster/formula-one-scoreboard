import {
  FREE_PRACTICE_ACTIVE,
  FREE_PRACTICE_ACTIVE_STANDINGS,
  FREE_PRACTICE_EVENTS,
  FREE_PRACTICE_UPCOMING,
} from './free-practice.types';

const INITIAL_STATE = {
  active: {},
  activeStandings: [],
  events: [],
  upcoming: {},
};

const freePracticeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FREE_PRACTICE_ACTIVE: {
      return {
        ...state,
        active: action.payload,
      };
    }

    case FREE_PRACTICE_ACTIVE_STANDINGS: {
      return {
        ...state,
        activeStandings: action.payload,
      };
    }

    case FREE_PRACTICE_EVENTS: {
      return {
        ...state,
        events: action.payload,
      };
    }

    case FREE_PRACTICE_UPCOMING: {
      return {
        ...state,
        upcoming: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default freePracticeReducer;
