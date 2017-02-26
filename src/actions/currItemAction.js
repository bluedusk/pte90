import { Actions } from 'react-native-router-flux';
import {
  FETCH_ITEM
} from './types';



export const fetchCurItem = (id) => {

  switch (type) {
    case 'ra':
      Actions['readAloud']();
      break;
    case 'rl':
      Actions['retellLecture']();
      break;
    default:
  }

  console.log(getState());

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch('http://rap.taobao.org/mockjsdata/14377/testItems');
      const responseJson = await response.json()
      console.log(responseJson);
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
