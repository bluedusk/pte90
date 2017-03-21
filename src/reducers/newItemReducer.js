import {
  NEW_ITEM,
} from '../actions/types';

const INITIAL_STATE = {
  type: '',
  array: [],
  error: '',
  loading: false,
  success: false
};
// TODO if add item fail
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_ITEM:
      return { ...state, success: true };
    default:
      return state;
  }
};
