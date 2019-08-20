import { combineReducers } from 'redux';
import counter from "./counter";
import { Counter } from "./counter";

export default () =>
  combineReducers({
    counter
  });


declare global {
  interface StateInterface {
    counter: Counter;
  }
}


