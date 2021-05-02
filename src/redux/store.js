import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const logger = () => {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('STORE:', store.getState());
  }
};

store.subscribe(logger);
logger();

export default store;
