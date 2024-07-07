import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import logger from 'redux-logger';


export const reducers = combineReducers({

});

export const store = createStore(reducers, applyMiddleware(thunk, logger));