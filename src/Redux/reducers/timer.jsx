import { TIMER } from '../actions/timer';

const INITIAL_STATE = 30;

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TIMER:
    return action.timer;
  default:
    return state;
  }
};

export default timerReducer;
