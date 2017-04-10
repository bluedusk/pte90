import { Actions } from 'react-native-router-flux';
import {
  FETCH_POSITIONS,
  DEL_POSITION,
  NEW_POSITION
} from './types';
import { POSITIONS_URL } from './config';


export const fetchPositions = (type) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(POSITIONS_URL);
      const responseJson = await response.json()
      //console.log(responseJson);
      dispatch({
        type: FETCH_POSITIONS,
        payload: responseJson,
      });

    } catch (e) {
      //console.log(e);

    }
  };
};

export const positionNew = (item) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(POSITIONS_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
      });
      const responseJson = await response.json()
      //console.log(responseJson);

      const response1 = await fetch(POSITIONS_URL);
      const responseJson1 = await response1.json()
      //console.log(responseJson);
      dispatch({
        type: FETCH_POSITIONS,
        payload: responseJson1,
      });


      // dispatch({
      //   type: NEW_POSITION,
      //   payload: responseJson,
      // });

    } catch (e) {
      //console.log(e);
    }
  };
};

export const delPosition = (id) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(`${POSITIONS_URL}/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }
      );
      const responseJson = await response.json()
      //console.log(responseJson);
      dispatch({
        type: DEL_POSITION,
        payload: responseJson,
      });

    } catch (e) {
      //console.log(e);
    }
  };
};
