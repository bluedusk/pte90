import { Actions } from 'react-native-router-flux';
import {
  EXP_NEW,
  FETCH_EXPS
} from './types';
import { EXPERIENCES_URL } from './config';


export const fetchExps = (type) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(EXPERIENCES_URL);
      const responseJson = await response.json()
      console.log(responseJson);
      dispatch({
        type: FETCH_EXPS,
        payload: responseJson,
      });

    } catch (e) {
      console.log(e);

    }
  };
};

export const expNew = () => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(EXPERIENCES_URL);
      const responseJson = await response.json()
      console.log(responseJson);
      dispatch({
        type: EXP_NEW,
        payload: responseJson,
      });

    } catch (e) {
      console.log(e);
    }
  };
};
