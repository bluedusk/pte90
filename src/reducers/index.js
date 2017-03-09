import { combineReducers } from 'redux';
import ItemsReducer from './itemsReducer';
import CurrentItemReducer from './currentItemReducer';
import PositionReducer from './positionReducer';
import EXPReducer from './expReducer';
import UserReducer from './userReducer';

import routes from './routes';

export default combineReducers({
  routes,
  items: ItemsReducer,
  currentItem: CurrentItemReducer,
  positions: PositionReducer,
  exps: EXPReducer,
  user: UserReducer
});
