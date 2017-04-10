import {
  FETCH_USER,
  USER_LOGIN
} from '../actions/types';

const INITIAL_STATE = {
  info: {points:0},
  error: '',
  loading: false,
  user:{} // current user, shared in all container
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_USER:
      return { ...state, info: action.payload.resBody };
    case USER_LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
