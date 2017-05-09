import {
  FETCH_USER,
  USER_LOGIN
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  info:{}, // current user, shared in all container
  points:0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, info: action.payload };
    case USER_LOGIN:
      let xxx = { ...state, info: action.payload, points: action.payload.points}
      return xxx;
    default:
      return state;
  }
};
