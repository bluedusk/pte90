import { Actions } from 'react-native-router-flux';
import {
  FETCH_ITEM
} from './types';



export const fetchCurrItem = (id) => {
  console.log(id);


  // get state in action
  console.log(this.getState());

  return {
    type: FETCH_ITEM,
    payload: {}
  }
};
