import { combineReducers } from 'redux';
import counter from './counter';
import characters from './characters';


const rootReducer = combineReducers({
  initialState: counter,
  anotherState: characters,
});

export default rootReducer;