import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  eventsActive,
  eventsFreePractice1,
  eventsFreePractice2,
  eventsFreePractice3,
  eventsQualifying,
  eventsRace,
  eventsUpcoming,
} from '../../../src/redux/events/events.actions';

import {
  EVENTS_ACTIVE,
  EVENTS_FREE_PRACTICE_1,
  EVENTS_FREE_PRACTICE_2,
  EVENTS_FREE_PRACTICE_3,
  EVENTS_QUALIFYING,
  EVENTS_RACE,
  EVENTS_UPCOMING,
} from '../../../src/redux/events/events.type';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Redux :: Events :: Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should set an active event', () => {
    const payload = {
      currentLap: '0',
      name: 'Race',
      startDateTime: '2021-05-02T22:00:00+08:00',
      state: 'active',
      totalLaps: 2,
    };

    store.dispatch(eventsActive(payload));

    expect(store.getActions()).toEqual([{
      type: EVENTS_ACTIVE,
      payload,
    }]);
  });

  it('should set a free practice 1 event', () => {
    const payload = {
      lapsDone: '31',
      name: 'Free Practice 1',
      startDateTime: '2021-04-30T18:30:00+08:00',
      state: 'done',
    };

    store.dispatch(eventsFreePractice1(payload));

    expect(store.getActions()).toEqual([{
      type: EVENTS_FREE_PRACTICE_1,
      payload,
    }]);
  });

  it('should set a free practice 2 event', () => {
    const payload = {
      lapsDone: '33',
      name: 'Free Practice 2',
      startDateTime: '2021-04-30T22:10:00+08:00',
      state: 'done',
    };

    store.dispatch(eventsFreePractice2(payload));

    expect(store.getActions()).toEqual([{
      type: EVENTS_FREE_PRACTICE_2,
      payload,
    }]);
  });

  it('should set a free practice 3 event', () => {
    const payload = {
      lapsDone: '21',
      name: 'Free Practice 3',
      startDateTime: '2021-05-01T19:00:00+08:00',
      state: 'done',
    };

    store.dispatch(eventsFreePractice3(payload));

    expect(store.getActions()).toEqual([{
      type: EVENTS_FREE_PRACTICE_3,
      payload,
    }]);
  });

  it('should set the qualifying event', () => {
    const payload = {
      lapsDone: '23',
      startDateTime: '2021-05-01T22:00:00+08:00',
      state: 'done',
    };

    store.dispatch(eventsQualifying(payload));

    expect(store.getActions()).toEqual([{
      type: EVENTS_QUALIFYING,
      payload,
    }]);
  });

  it('should set the race event', () => {
    const payload = {
      currentLap: '0',
      startDateTime: '2021-05-02T22:00:00+08:00',
      state: 'upcoming',
      totalLaps: 0,
    };

    store.dispatch(eventsRace(payload));

    expect(store.getActions()).toEqual([{
      type: EVENTS_RACE,
      payload,
    }]);
  });

  it('should set the upcoming event', () => {
    const payload = {
      currentLap: '0',
      startDateTime: '2021-05-02T22:00:00+08:00',
      state: 'upcoming',
      totalLaps: 0,
      name: 'Race',
    };

    expect(eventsUpcoming(payload)).toEqual({
      type: EVENTS_UPCOMING,
      payload,
    });
  });
});
