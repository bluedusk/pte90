import { Actions } from 'react-native-router-flux';
import {
  FETCH_POSITIONS
} from './types';



export const fetchPositions = (type) => {

  switch (type) {
    case 'ra':
      Actions['readAloud']();
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
