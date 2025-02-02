import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const actionTypeLoggerMiddleware = store => next => action => {
  console.log('Action Type:', action.type);
  return next(action);
};

const payloadLoggerMiddleware = store => next => action => {
  console.log('Action Payload:', action.payload);
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(actionTypeLoggerMiddleware, payloadLoggerMiddleware)
);

export default store;
