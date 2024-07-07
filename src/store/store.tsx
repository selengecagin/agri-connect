import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import logger from 'redux-logger';

//eğer bir componente state datası çekmek istiyorsak store içerisinden reducer içersisinden değeri çekmeliyiz
//örneğin store içerisinden categories çekmek için store.global.categories den almalıyız.
export const reducers = combineReducers({

});

export const store = createStore(reducers, applyMiddleware(thunk, logger));