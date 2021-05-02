import {
  EVENTS_ACTIVE,
  EVENTS_FREE_PRACTICE_1,
  EVENTS_FREE_PRACTICE_2,
  EVENTS_FREE_PRACTICE_3,
  EVENTS_QUALIFYING,
  EVENTS_RACE,
  EVENTS_UPCOMING,
} from './events.type';

const INITIAL_STATE = {
  active: null,

  freePractice1: {},
  freePractice2: {},
  freePractice3: {},

  qualifying: {},

  race: {},

  upcoming: null,
};

const eventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENTS_ACTIVE: {
      return {
        ...state,
        active: action.payload,
      };
    }

    case EVENTS_FREE_PRACTICE_1: {
      return {
        ...state,
        freePractice1: action.payload,
      };
    }

    case EVENTS_FREE_PRACTICE_2: {
      return {
        ...state,
        freePractice2: action.payload,
      };
    }

    case EVENTS_FREE_PRACTICE_3: {
      return {
        ...state,
        freePractice3: action.payload,
      };
    }

    case EVENTS_QUALIFYING: {
      return {
        ...state,
        qualifying: action.payload,
      };
    }

    case EVENTS_RACE: {
      return {
        ...state,
        race: action.payload,
      };
    }

    case EVENTS_UPCOMING: {
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

export default eventsReducer;
