import { combineReducers } from 'redux';

import eventsReducer from './events/events.reducer';
import grandPrixReducer from './grand-prix/grand-prix.reducer';

const reducers = combineReducers({
  events: eventsReducer,
  grandPrix: grandPrixReducer,
});

export default reducers;
