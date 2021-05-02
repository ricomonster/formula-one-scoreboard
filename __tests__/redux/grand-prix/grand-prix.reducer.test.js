import {
  GRAND_PRIX,
  GRAND_PRIX_ERROR,
  GRAND_PRIX_LOADING,

  GRAND_PRIX_CIRCUIT,
} from '../../../src/redux/grand-prix/grand-prix.types';
import reducer from '../../../src/redux/grand-prix/grand-prix.reducer';

const initialState = {
  circuit: {},

  grandPrix: {},
  grandPrixLoading: false,
  grandPrixError: null,
};

describe('Redux :: Grand Prix :: Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return grand prix details', () => {
    const payload = { name: 'Australian Grand Prix ' };

    const grandPrixReducer = reducer([], {
      type: GRAND_PRIX,
      payload,
    });

    expect(grandPrixReducer).toEqual({
      grandPrix: payload,
    });
  });

  it('should return the loading status of the grand prix', () => {
    const grandPrixReducer = reducer([], {
      type: GRAND_PRIX_LOADING,
      payload: false,
    });

    expect(grandPrixReducer).toEqual({
      grandPrixLoading: false,
    });
  });

  it('should return an error of the grand prix', () => {
    const payload = new Error('Grand Prix Error');

    const grandPrixReducer = reducer([], {
      type: GRAND_PRIX_ERROR,
      payload,
    });

    expect(grandPrixReducer).toEqual({
      grandPrixError: payload,
    });
  });

  it('should return grand prix circuit details', () => {
    const payload = { name: 'Albert Park Circuit' };

    const grandPrixReducer = reducer([], {
      type: GRAND_PRIX_CIRCUIT,
      payload,
    });

    expect(grandPrixReducer).toEqual({
      circuit: payload,
    });
  });
});
