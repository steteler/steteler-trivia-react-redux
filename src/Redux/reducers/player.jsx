import { INPUT_NAME } from '../actions/login';
import { SCORE_COUNT } from '../actions/score';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
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
  default:
    return state;
  }
};

export default player;
