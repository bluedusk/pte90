import { Actions } from 'react-native-router-flux';
import {
  FETCH_ITEMS,
  FETCH_USERITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  TESTED_ITEM
} from './types';
import { AsyncStorage } from 'react-native';
import { TESTITEMS_URL, TESTEDITEM_URL } from './config';


export const fetchItems = (type) => {

  switch (type) {
    case 'ra':
      Actions['readAloud']({itemType:type,header:'Read Aloud'});
      break;
    case 'rl':
      Actions['itemList']({itemType:type,header:'Retell Leture'});
      break;
    case 'di':
      Actions['diAlbum']({itemType:type,header:'Describe Image'});
      break;
    case 'asq':
      Actions['asqList']({itemType:type,header:'ASQ'});
      break;
    case 'rs':
    Actions['itemListContent']({itemType:type,header:'Repeat Sentence'});
      break;
    case 'rfib':
      Actions['itemList']({itemType:type,header:'FIB'});
      break;
    case 'rsc':
      Actions['itemListContent']({itemType:type,header:'Single Choice'});
      break;
    case 'rmc':
      Actions['itemListContent']({itemType:type,header:'Multi Choice'});
      break;
    case 'reorder':
      Actions['itemList']({itemType:type,header:'Reorder'});
      break;
    case 'swt':
      Actions['itemList']({itemType:type,header:'SWT'});
      break;
    case 'essay':
      Actions['essayList']({itemType:type,header:'Essay'});
      break;
    case 'dic':
      Actions['itemListContent']({itemType:type,header:'Dictation'});
      break;
    case 'sst':
      Actions['itemList']({itemType:type,header:'SST'});
      break;
    case 'lsc':
      Actions['itemListContent']({itemType:type,header:'Single Choice'});
      break;
    case 'lmc':
      Actions['itemListContent']({itemType:type,header:'Multi Choice'});
      break;
    case 'smw':
      Actions['itemListContent']({itemType:type,header:'Missing Word'});
      break;
    case 'scs':
      Actions['itemListContent']({itemType:type,header:'Summary'});
      break;
    case 'lfib':
      Actions['itemListContent']({itemType:type,header:'FIB'});
      break;
    case 'siw':
      Actions['itemListContent']({itemType:type,header:'Incorrect Word'});
      break;
    default:
  }

  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_ITEMS
    });
    try {
      let user = await AsyncStorage.getItem('@user:key');
      console.log(`${TESTITEMS_URL}/${type}?official=true&queryid=${JSON.parse(user).id}`);
      const response = await fetch(`${TESTITEMS_URL}/${type}?official=true&queryid=${JSON.parse(user).id}`);
      const responseJson = await response.json()
      console.log(responseJson);
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        payload: responseJson
      });

    } catch (e) {
      console.log(e);
      dispatch({
        type: FETCH_ITEMS_FAIL,
        payload: e
      });
    }
  };
};

export const fetchUserItems = (contributor) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      let user = await AsyncStorage.getItem('@user:key');

      const response = await fetch(`${TESTITEMS_URL}/?official=false&queryid=${JSON.parse(user).id}&contributor=${contributor}`);
      const responseJson = await response.json()
      //console.log(responseJson);
      dispatch({
        type: FETCH_USERITEMS,
        payload: responseJson,
      });

    } catch (e) {
      //console.log(e);
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
      const response = await fetch(`${TESTITEMS_URL}/${id}`,
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
        type: DEL_ITEM,
        payload: responseJson,
      });

    } catch (e) {
      //console.log(e);
    }
  };
};
export const testedItem = (itemId) => {
console.log(itemId);
  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      let user = await AsyncStorage.getItem('@user:key');
      let item = {userId: JSON.parse(user).id, itemId: itemId};
      const response = await fetch(`${TESTEDITEM_URL}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item)
        }
      );
      const responseJson = await response.json()
      //console.log(responseJson);
      dispatch({
        type: TESTED_ITEM,
        payload: responseJson,
      });

    } catch (e) {
      //console.log(e);
    }
  };
};
export const unTestedItem = (itemId) => {

  return async (dispatch, getState) => {
    try {
      // dispatch({
      //   type: FETCH_ITEMS,
      //   payload: {},
      // });
      let user = await AsyncStorage.getItem('@user:key');
      let item = {userId: JSON.parse(user).id, itemId: itemId};
      const response = await fetch(`${TESTEDITEM_URL}`,
        {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item)
        }
      );
      const responseJson = await response.json()
      //console.log(responseJson);
      dispatch({
        type: TESTED_ITEM,
        payload: responseJson,
      });

    } catch (e) {
      //console.log(e);
    }
  };
};
