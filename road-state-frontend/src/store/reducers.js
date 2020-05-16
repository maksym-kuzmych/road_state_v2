import {combineReducers} from 'redux';
import {DrawerReducer as drawer} from '../features/drawer/modules/reducer';
import {MapReducer as map} from '../features/map/modules/reducer';
import {MarkCreateReducer as markCreate} from '../features/createMark/modules/reducer';

export const makeRootReducer = () => {
  return combineReducers({drawer, map, markCreate});
};

export default makeRootReducer;
