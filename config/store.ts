import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReducer from '../modules';

export default function configureStore () {
  const initialState = {};
  const middleware = [thunk, logger];
  return createStore (
    rootReducer (),
    initialState,
    compose (applyMiddleware (...middleware))
  );
}