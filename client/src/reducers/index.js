import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// combineReducers is a helper function takes in an object. key is a piece of state, value is the reducer that handles that state
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
