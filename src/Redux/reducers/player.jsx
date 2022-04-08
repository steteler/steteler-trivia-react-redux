import { INPUT_NAME } from '../actions/login';

const INITIAL_STATE = {
  name: '',
  // assertions: 0,
  // score: 0,
  gravatarEmail: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_NAME:
    return {
      ...state,
      name: action.name,
      // assertions: action.assertions,
      // score: action.score,
      gravatarEmail: action.gravatarEmail,
    };
  default:
    return state;
  }
};

export default loginReducer;
