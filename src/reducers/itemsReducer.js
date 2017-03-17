import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  type: '',
  array: [],
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
    // need to set array to [], unless data in last state will shown
      return { ...state, loading: true, array:[] };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, array: action.payload.resBody, loading: false };
    case FETCH_ITEMS_FAIL:
      return { ...state, error: action.payload, loading: false };
    // case EMAIL_CHANGED:
    //   return { ...state, email: action.payload };
    // case PASSWORD_CHANGED:
    //   return { ...state, password: action.payload };
    // case LOGIN_USER:
    //   return { ...state, loading: true, error: '' };
    // case LOGIN_USER_SUCCESS:
    //   return { ...state, ...INITIAL_STATE, user: action.payload };
    // case LOGIN_USER_FAIL:
    //   return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};
