import { Actions } from 'react-native-router-flux';
import {
  FETCH_USER,
  USER_LOGIN
} from './types';
import { USER_URL } from './config';
import { AsyncStorage } from 'react-native';

export const fetchUser = (type) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      const response = await fetch(USER_URL);
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

// save user into asyncStorge
export const userLogin = () => {

  return async (dispatch) => {
    try {
      // TODO: WeChat login
      let user = {name:"pte90",id:"58d13a531163837a9f9debeb",points:100};
      let promise = await AsyncStorage.setItem('@user:key', JSON.stringify(user));
      //var value = await AsyncStorage.getItem('@user:key');
      // const response = await fetch(FETCHUSER_URL);
      // const responseJson = await response.json()
      // console.log(responseJson);
      // console.log(user);
      dispatch({
        type: USER_LOGIN,
        payload: user
      });

    } catch (e) {
      //console.log(e);

    }

  };
};
export const pointsUpdate = (user,type) => {

  //var value = await AsyncStorage.getItem('@user:key');
  // let Today = new Date();
  // let todayStr = Today.getFullYear() +"-"+ (Today.getMonth()+1) +"-"+ Today.getDate();
  // switch (type) {
  //   case -1:
  //     let logonCost = await AsyncStorage.getItem('@logonCost:key');
  //     if (logonCost == todayStr) {
  //       // return;
  //     } else {
  //       await AsyncStorage.setItem('@logonCost:key', todayStr);
  //     }
  //     break;
  //   case 1:
  //     let shareAward = await AsyncStorage.getItem('@shareAward:key');
  //     if (shareAward == todayStr) {
  //       return;
  //     } else {
  //       await AsyncStorage.setItem('@shareAward:key', todayStr);
  //     }
  //     break;
  //   default:
  //     return;
  // }

  return async (dispatch) => {
    try {
      const response = await fetch(`${USER_URL}`,
        {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        }
      );
      console.log(response);
      dispatch({
        type: USER_LOGIN,
        payload: user
      });

    } catch (e) {
      console.log(e);
    }
  };
};
