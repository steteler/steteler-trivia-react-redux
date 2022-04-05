import { NAME_INPUT } from './index';

const INICIAL_STATE = {
  name: '',
  email: '',
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case NAME_INPUT:
    return {
      ...state,
      name: action.payload,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
