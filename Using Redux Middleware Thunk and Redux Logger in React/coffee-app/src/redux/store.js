import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import coffeeReducer from './coffeeReducer';

const rootReducer = combineReducers({
  coffee: coffeeReducer
});

const logger = createLogger(); // Ensure this is created correctly

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;
