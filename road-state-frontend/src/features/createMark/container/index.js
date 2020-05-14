import {connect} from 'react-redux';
import CreateMarkScreen from '../formComponent/index';

const mapStateToProps = state => ({
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
});

const mapActionCreators = {};

const CreateMarkContainer = connect(
  mapStateToProps,
  mapActionCreators,
)(CreateMarkScreen);

export default CreateMarkContainer;
