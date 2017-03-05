import { combineReducers } from 'redux';
import ItemsReducer from './itemsReducer';
import CurrentItemReducer from './currentItemReducer';
import PositionReducer from './positionReducer';

import routes from './routes';

export default combineReducers({
  routes,
  items: ItemsReducer,
  currentItem: CurrentItemReducer,
  positions: PositionReducer
});
