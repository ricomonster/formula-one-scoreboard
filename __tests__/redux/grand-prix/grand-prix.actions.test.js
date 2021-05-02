import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import {
  GRAND_PRIX,
  GRAND_PRIX_ERROR,
  GRAND_PRIX_LOADING,

  GRAND_PRIX_CIRCUIT,
} from '../../../src/redux/grand-prix/grand-prix.types';
import {
  grandPrixLoading,
  getGrandPrixAction,
} from '../../../src/redux/grand-prix/grand-prix.actions';

// Mock data
import { grandPrixEvent, f1Events } from '../../../__fixtures__/grand-prix';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

// jest.mock('axios');

describe('Redux :: Grand Prix :: Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should set a loading state for the grand prix', () => {
    expect(grandPrixLoading(true)).toEqual({
      type: GRAND_PRIX_LOADING,
      payload: true,
    });
  });

  it('should fetch details of the grand prix from ESPN', async () => {
    // Mock
    // axios.get.mockImplementation((url) => {
    //   switch (url) {
    //     case 'https://site.web.api.espn.com/apis/v2/scoreboard/header':
    //       return Promise.resolve({ data: f1Events });

    //     case 'https://site.web.api.espn.com/apis/site/v2/sports/racing/f1/racepackage':
    //       return Promise.resolve({ data: grandPrixEvent });

    //     default:
    //       console.error(`Unknown url: ${url}`);
    //       break;
    //   }
    // });

    await store.dispatch(getGrandPrixAction());

    expect(store.getActions()).toEqual([
      { type: GRAND_PRIX_LOADING, payload: false },
    ]);
  });
});
