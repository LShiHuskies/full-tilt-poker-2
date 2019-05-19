import { combineReducers } from 'redux';
import counter from './counter';
import characters from './characters';
import LoginSignUp from './LoginSignUp';


const rootReducer = combineReducers({
  initialState: counter,
  anotherState: characters,
  LoginSignUp: LoginSignUp
});

export default rootReducer;