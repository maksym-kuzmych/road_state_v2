import {combineReducers} from 'redux';
import {DrawerReducer as drawer} from '../features/drawer/modules/reducer';
import {MapReducer as map} from '../features/map/modules/reducer';
import {MarkCreateReducer as markCreate} from '../features/createMark/modules/reducer';
import {ProfileReducer as profile} from '../features/profile/modules/reducer';
import {RegistrationReducer as register} from '../features/auth/registration/modules/reducer';
import {LoginReducer as login} from '../features/auth/authorization/modules/reducer';

export const makeRootReducer = () => {
  return combineReducers({drawer, map, markCreate, profile, register, login});
};

export default makeRootReducer;
