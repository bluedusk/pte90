import { Actions } from 'react-native-router-flux';
import {
  FETCH_USER
} from './types';
import { FETCHUSER_URL } from './config';


export const fetchUser = (type) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(FETCHUSER_URL);
      const responseJson = await response.json()
      // console.log(responseJson);
      dispatch({
        type: FETCH_USER,
        payload: responseJson,
      });

    } catch (e) {
      //console.log(e);

    }

  };
};
