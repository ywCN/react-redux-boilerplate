import { LOGIN } from '../actions/types';

const defaultState = {
  token: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload };
    // case LOGOUT:
    //   return defaultState;
    default:
      return state;
  }
}
