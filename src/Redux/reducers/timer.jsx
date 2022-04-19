import { INPUT_TIMER } from '../actions/timer';

const INITIAL_STATE = 30;

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_TIMER:
    return action.timer;
  default:
    return state;
  }
};

export default timerReducer;
