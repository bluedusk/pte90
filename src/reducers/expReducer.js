import {
  FETCH_EXPS
} from '../actions/types';

const INITIAL_STATE = {
  type: '',
  array: [],
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case FETCH_EXPS:
      return { ...state, array: action.payload.resBody };
    default:
      return state;
  }
};
