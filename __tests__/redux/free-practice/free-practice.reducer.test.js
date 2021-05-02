import {
  FREE_PRACTICE_ACTIVE,
  FREE_PRACTICE_ACTIVE_STANDINGS,
  FREE_PRACTICE_EVENTS,
  FREE_PRACTICE_UPCOMING,
} from '../../../src/redux/free-practice/free-practice.types';
import reducer from '../../../src/redux/free-practice/free-practice.reducer';

const initialState = {
  active: {},
  activeStandings: [],
  events: [],
  upcoming: {},
};

describe('Redux :: Free Practice :: Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return the active free practice', () => {
    const payload = {
      name: 'Free Practice 1',
      startDateTime: new Date(),
      lapRunningAt: '31/0',
    };

    const freePracticeReducer = reducer([], {
      type: FREE_PRACTICE_ACTIVE,
      payload,
    });

    expect(freePracticeReducer).toEqual({
      active: payload,
    });
  });

  it('should return the active standings of the free practice', () => {
    const payload = [{
      driver: {
        lastName: 'Hamilton',
        firstName: 'Lewis',
        displayName: 'Lewis Hamilton',
        shortName: 'L. Hamilton',
        abbreviation: 'HAM',
        headshot: {
          url: 'https://a.espncdn.com/i/headshots/rpm/players/full/868.png',
          alt: 'Lewis Hamilton',
        },
        flag: {
          url: 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png',
          alt: 'Britain',
        },
      },
      team: {
        name: 'Mercedes',
        color: '00D2BE',
      },
      race: {
        lapsCompleted: '33',
        place: 1,
        totalTime: '1:19.837',
        status: 'STATUS_CLASSIFIED',
      },
    }];

    const freePracticeReducer = reducer([], {
      type: FREE_PRACTICE_ACTIVE_STANDINGS,
      payload,
    });

    expect(freePracticeReducer).toEqual({
      activeStandings: payload,
    });
  });

  it('should return free practice events', () => {
    const payload = [
      {
        name: 'Free Practice 1',
        startDateTime: new Date(),
        lapsDone: '31/0',
        state: 'done',
      },
      {
        name: 'Free Practice 2',
        startDateTime: new Date(),
        lapsDone: '31/0',
        state: 'active',
      },
      {
        name: 'Free Practice 3',
        startDateTime: new Date(),
        lapsDone: '31/0',
        state: 'upcoming',
      },
    ];

    const freePracticeReducer = reducer([], {
      type: FREE_PRACTICE_EVENTS,
      payload,
    });

    expect(freePracticeReducer).toEqual({
      events: payload,
    });
  });

  it('should return the upcoming free practice', () => {
    const payload = {
      name: 'Free Practice 3',
      startDateTime: new Date(),
      lapRunningAt: '0',
    };

    const freePracticeReducer = reducer([], {
      type: FREE_PRACTICE_UPCOMING,
      payload,
    });

    expect(freePracticeReducer).toEqual({
      upcoming: payload,
    });
  });
});
