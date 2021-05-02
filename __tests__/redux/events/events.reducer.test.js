import {
  EVENTS_ACTIVE,
  EVENTS_FREE_PRACTICE_1,
  EVENTS_FREE_PRACTICE_2,
  EVENTS_FREE_PRACTICE_3,
  EVENTS_QUALIFYING,
  EVENTS_RACE,
  EVENTS_UPCOMING,
} from '../../../src/redux/events/events.type';
import reducer from '../../../src/redux/events/events.reducer';

const initialState = {
  active: null,

  freePractice1: {},
  freePractice2: {},
  freePractice3: {},

  qualifying: {},

  race: {},

  upcoming: null,
};

describe('Redux :: Grand Prix :: Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set active event', () => {
    const payload = {
      currentLap: '0',
      name: 'Race',
      startDateTime: '2021-05-02T22:00:00+08:00',
      state: 'active',
      totalLaps: 2,
    };

    const eventsReducer = reducer([], {
      type: EVENTS_ACTIVE,
      payload,
    });

    expect(eventsReducer).toEqual({
      active: payload,
    });
  });

  it('should set free practice 1 event details', () => {
    const payload = {
      lapsDone: '31',
      name: 'Free Practice 1',
      startDateTime: '2021-04-30T18:30:00+08:00',
      state: 'done',
    };

    const eventsReducer = reducer([], {
      type: EVENTS_FREE_PRACTICE_1,
      payload,
    });

    expect(eventsReducer).toEqual({
      freePractice1: payload,
    });
  });

  it('should set free practice 2 event details', () => {
    const payload = {
      lapsDone: '33',
      name: 'Free Practice 2',
      startDateTime: '2021-04-30T22:10:00+08:00',
      state: 'done',
    };

    const eventsReducer = reducer([], {
      type: EVENTS_FREE_PRACTICE_2,
      payload,
    });

    expect(eventsReducer).toEqual({
      freePractice2: payload,
    });
  });

  it('should set free practice 3 event details', () => {
    const payload = {
      lapsDone: '21',
      name: 'Free Practice 3',
      startDateTime: '2021-05-01T19:00:00+08:00',
      state: 'done',
    };

    const eventsReducer = reducer([], {
      type: EVENTS_FREE_PRACTICE_3,
      payload,
    });

    expect(eventsReducer).toEqual({
      freePractice3: payload,
    });
  });

  it('should set qualifying event details', () => {
    const payload = {
      lapsDone: '23',
      startDateTime: '2021-05-01T22:00:00+08:00',
      state: 'done',
    };

    const eventsReducer = reducer([], {
      type: EVENTS_QUALIFYING,
      payload,
    });

    expect(eventsReducer).toEqual({
      qualifying: payload,
    });
  });

  it('should set race event details', () => {
    const payload = {
      currentLap: '0',
      startDateTime: '2021-05-02T22:00:00+08:00',
      state: 'upcoming',
      totalLaps: 0,
    };

    const eventsReducer = reducer([], {
      type: EVENTS_RACE,
      payload,
    });

    expect(eventsReducer).toEqual({
      race: payload,
    });
  });

  it('should set upcoming event details', () => {
    const payload = {
      currentLap: '0',
      startDateTime: '2021-05-02T22:00:00+08:00',
      state: 'upcoming',
      totalLaps: 0,
      name: 'Race',
    };

    const eventsReducer = reducer([], {
      type: EVENTS_UPCOMING,
      payload,
    });

    expect(eventsReducer).toEqual({
      upcoming: payload,
    });
  });
});
