import { INPUT_NAME } from '../actions/login';
import { SCORE_COUNT } from '../actions/score';
import { ASSERTIONS_COUNT } from '../actions/assertions';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  assertions: 0,
  score: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_NAME:
    return {
      ...state,
      name: action.name,
      gravatarEmail: action.gravatarEmail,
    };
  case SCORE_COUNT:
    return {
      ...state,
      score: state.score + action.score,
    };
  case ASSERTIONS_COUNT:
    return {
      ...state,
      assertions: state.assertions + action.assertions,
    };
  default:
    return state;
  }
};

export default player;
