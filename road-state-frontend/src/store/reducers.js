import {combineReducers} from 'redux';
import {DrawerReducer as drawer} from '../features/drawer/modules/reducer';
import {MapReducer as map} from '../features/map/modules/reducer';

export const makeRootReducer = () => {
  return combineReducers({drawer, map});
};

export default makeRootReducer;
