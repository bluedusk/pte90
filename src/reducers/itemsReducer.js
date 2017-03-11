import {
  FETCH_ITEMS
} from '../actions/types';

const INITIAL_STATE = {
  type: '',
  array: [],
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action.payload);
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, array: action.payload.resBody };
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
