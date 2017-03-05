import { Actions } from 'react-native-router-flux';
import {
  NEW_ITEM
} from './types';



export const newItem = (item) => {
  console.log(item);

  // redux thunk , return a function
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
        type: NEW_ITEM,
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
