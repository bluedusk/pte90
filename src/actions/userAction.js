import { Actions } from 'react-native-router-flux';
import {
  FETCH_USER,
  USER_LOGIN
} from './types';
import { FETCHUSER_URL } from './config';
import { AsyncStorage } from 'react-native';

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

// save user into asyncStorge
export const userLogin = () => {

  return async (dispatch) => {
    try {
      // TODO: WeChat login
      let user = {name:"pte90",id:"58d13a531163837a9f9debeb"};
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
