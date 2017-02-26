import { combineReducers } from 'redux';
import ItemsReducer from './itemsReducer';

import routes from './routes';

export default combineReducers({
  routes,
  items: ItemsReducer
});
