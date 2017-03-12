import { Actions } from 'react-native-router-flux';
import {
  NEW_ITEM
} from './types';
import { NEWITEM_URL } from './config';


export const newItem = (item) => {
  //console.log(item);

  // redux thunk , return a function
  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      //console.log(JSON.stringify(item))

      const response = await fetch(NEWITEM_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
      });
      const responseJson = await response.json()
      //console.log(responseJson);
      dispatch({
        type: NEW_ITEM,
        payload: responseJson,
      });

    } catch (e) {
      //console.log(e);

    }

  };
};
