import {
  STANDINGS_FREE_PRACTICE_1,
  STANDINGS_FREE_PRACTICE_2,
  STANDINGS_FREE_PRACTICE_3,
  STANDINGS_QUALIFYING,
  STANDINGS_RACE,
} from './standings.types';

const INITIAL_STATE = {
  freePractice1: [],
  freePractice2: [],
  freePractice3: [],
  qualifying: [],
  race: [],
};

const standingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STANDINGS_FREE_PRACTICE_1: {
      return {
        ...state,
        freePractice1: action.payload,
      };
    }

    case STANDINGS_FREE_PRACTICE_2: {
      return {
        ...state,
        freePractice2: action.payload,
      };
    }

    case STANDINGS_FREE_PRACTICE_3: {
      return {
        ...state,
        freePractice3: action.payload,
      };
    }

    case STANDINGS_QUALIFYING: {
      return {
        ...state,
        qualifying: action.payload,
      };
    }

    case STANDINGS_RACE: {
      return {
        ...state,
        race: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default standingsReducer;
