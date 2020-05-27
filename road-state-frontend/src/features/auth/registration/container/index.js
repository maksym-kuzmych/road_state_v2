import {connect} from 'react-redux';
import RegistrationForm from '../formComponent/index';
import {registerUser} from '../modules/reducer';

const mapStateToProps = state => ({
  isRegistered: state.register.isRegistered || false,
  isLoading: state.register.isLoading || false,
});

const mapActionCreators = {
  registerUser,
};

const RegistrationContainer = connect(
  mapStateToProps,
  mapActionCreators,
)(RegistrationForm);

export default RegistrationContainer;
