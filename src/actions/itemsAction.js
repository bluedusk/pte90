import { Actions } from 'react-native-router-flux';
import {
  FETCH_ITEMS,
  FETCH_USERITEMS
} from './types';
import { TESTITEMS_URL } from './config';


export const fetchItems = (type) => {

  switch (type) {
    case 'ra':
      Actions['readAloud']({itemType:type,header:'Read Aloud'});
      break;
    case 'rl':
      Actions['retellLecture']();
      break;
    case 'di':
      Actions['diAlbum']();
      break;
    case 'asq':
      Actions['asqList']();
      break;
    case 'rs':
      Actions['rs']();
      break;
    case 'fib':
      Actions['itemList']({header:'FIB'});
      break;
    case 'rsc':
      Actions['itemListContent']({header:'Single Choice'});
      break;
    case 'rmc':
      Actions['itemListContent']({header:'Multi Choice'});
      break;
    case 'reorder':
      Actions['itemList']({header:'Reorder'});
      break;
    case 'swt':
      Actions['itemList']({header:'SWT'});
      break;
    case 'essayList':
      Actions['essayList']({header:'Essay'});
      break;
    default:
  }

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(`${TESTITEMS_URL}/${type}`);
      const responseJson = await response.json()
      //console.log(responseJson);
      dispatch({
        type: FETCH_ITEMS,
        payload: responseJson,
      });

    } catch (e) {
      console.log(e);

    }
    // dispatch({ type: LOGIN_USER });
    //
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(user => loginUserSuccess(dispatch, user))
    //   .catch((error) => {
    //     console.log(error);
    //
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(user => loginUserSuccess(dispatch, user))
    //       .catch(() => loginUserFail(dispatch));
    //   });
  };
};

export const fetchUserItems = (user) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(`${TESTITEMS_URL}/?contributor=${user}`);
      const responseJson = await response.json()
      console.log(responseJson);
      dispatch({
        type: FETCH_USERITEMS,
        payload: responseJson,
      });

    } catch (e) {
      console.log(e);
    }
  };
};

export const delItem = (id) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(`${TESTITEMS_URL}/?contributor=${user}`);
      const responseJson = await response.json()
      console.log(responseJson);
      dispatch({
        type: FETCH_USERITEMS,
        payload: responseJson,
      });

    } catch (e) {
      console.log(e);
    }
  };
};
