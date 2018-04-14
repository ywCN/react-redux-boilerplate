import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm
});

export default rootReducer;
