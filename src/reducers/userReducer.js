import {
  FETCH_USER
} from '../actions/types';

const INITIAL_STATE = {
  info: {points:0},
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_USER:
      return { ...state, info: action.payload.resBody };
    default:
      return state;
  }
};
