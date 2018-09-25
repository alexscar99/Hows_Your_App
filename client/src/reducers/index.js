import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

/* 
 * combineReducers is a helper function that takes in an object 
 * Key is a piece of state, val is the reducer that 
 * handles that state.
*/
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
});
