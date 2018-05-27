import { combineReducers } from 'redux';
import authReducer from './authReducer';

// combineReducers is a helper function takes in an object. key is a piece of state, value is the reducer that handles that state
export default combineReducers({
  auth: authReducer
});
