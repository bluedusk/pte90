import { Actions } from 'react-native-router-flux';
import {
  FETCH_EXPS
} from './types';



export const fetchExps = (type) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch('http://rap.taobao.org/mockjsdata/14377/positions');
      const responseJson = await response.json()
      console.log(responseJson);
      dispatch({
        type: FETCH_POSITIONS,
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
      const response = await fetch('http://rap.taobao.org/mockjsdata/14377/experiences');
      const responseJson = await response.json()
      console.log(responseJson);
      dispatch({
        type: FETCH_POSITIONS,
        payload: responseJson,
      });

    } catch (e) {
      console.log(e);
    }
  };
};
