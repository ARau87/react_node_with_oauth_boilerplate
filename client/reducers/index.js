import { combineReducers } from 'redux';

//Import the reducers of the application
import weeks from './reducer-weeks';

const rootReducer = combineReducers({
  weeks: weeks
});

export default rootReducer;
