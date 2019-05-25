import { combineReducers } from 'redux';
import counter from './counter';
import characters from './characters';
import LoginSignUp from './LoginSignUp';
import GameReducer from './GameReducer';


const rootReducer = combineReducers({
  initialState: counter,
  anotherState: characters,
  LoginSignUp: LoginSignUp,
  GameReducer: GameReducer,
});

export default rootReducer;