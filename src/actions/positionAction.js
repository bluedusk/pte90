import { Actions } from 'react-native-router-flux';
import {
  FETCH_POSITIONS,
  DEL_POSITION
} from './types';
import { POSITIONS_URL } from './config';


export const fetchPositions = (type) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch('POSITIONS_URL');
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

export const positionNew = () => {

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

export const delPosition = () => {

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
        type: DEL_POSITION,
        payload: responseJson,
      });

    } catch (e) {
      console.log(e);
    }
  };
};
