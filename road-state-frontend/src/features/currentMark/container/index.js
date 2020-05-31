import {connect} from 'react-redux';
import CurrentMarkScreen from '../formComponent/index';
import {getCreateLocation, getSelectedLocation} from '../modules/reducer';

const mapStateToProps = state => ({
    isLogedIn: state.login.isLogedIn || false,
});

const mapActionCreators = {};

const CurrentMarkContainer = connect(
  mapStateToProps,
  mapActionCreators,
)(CurrentMarkScreen);

export default CurrentMarkContainer;
