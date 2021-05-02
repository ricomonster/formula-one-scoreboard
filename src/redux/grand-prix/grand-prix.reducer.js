import {
  GRAND_PRIX,
  GRAND_PRIX_ERROR,
  GRAND_PRIX_LOADING,

  GRAND_PRIX_CIRCUIT,
} from './grand-prix.types';

const INITIAL_STATE = {
  circuit: {},

  grandPrix: {},
  grandPrixLoading: false,
  grandPrixError: null,
};

const grandPrixReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GRAND_PRIX: {
      return {
        ...state,
        grandPrix: action.payload,
      };
    }

    case GRAND_PRIX_ERROR: {
      return {
        ...state,
        grandPrixError: action.payload,
      };
    }

    case GRAND_PRIX_LOADING: {
      return {
        ...state,
        grandPrixLoading: action.payload,
      };
    }

    case GRAND_PRIX_CIRCUIT: {
      return {
        ...state,
        circuit: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default grandPrixReducer;
