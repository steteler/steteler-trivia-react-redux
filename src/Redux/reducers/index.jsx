import { combineReducers } from 'redux';
import loginReducer from './player';
import token from './token';

const rootReducer = combineReducers({ loginReducer, token });

export default rootReducer;
