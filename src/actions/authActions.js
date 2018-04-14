import { LOGIN } from './types';

export const login = () => async dispatch => {
  dispatch({ type: LOGIN, payload: 'testingAuthToken' });
};
