import {connect} from 'react-redux';
import DrawerNavigator from '../formComponent/index';
import {
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
  addIntermediatePoint,
  removeIntermediatePoint,
  getAddressPredictions,
  getSelectedAddress,
  buildRoute
} from '../modules/reducer';

const mapStateToProps = state => ({
  region: state.drawer.region,
  inputData: state.drawer.inputData || {},
  resultTypes: state.drawer.resultTypes || {
    pickUp: {},
    pickUpLocation: null,
    intermediate_1: {id: 1, visible: {}, selected: {}, location: null},
    intermediate_2: {id: 2, visible: {}, selected: {}, location: null},
    intermediate_3: {id: 3, visible: {}, selected: {}, location: null},
    dropOff: {},
    dropOffLocation: null,
    showPoint: 0,
    buildRoute: null,
  },
  predictions: state.drawer.predictions || [],
  selectedAddress: state.drawer.selectedAddress || {},
});

const mapActionCreators = {
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
  addIntermediatePoint,
  removeIntermediatePoint,
  getAddressPredictions,
  getSelectedAddress,
  buildRoute
};

export default connect(
  mapStateToProps,
  mapActionCreators,
)(DrawerNavigator);
