import { INPUT_TOKEN } from '../actions/token';

const INITIAL_STATE = '';

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_TOKEN:
    return action.token;
  default:
    return state;
  }
};

export default tokenReducer;
