import {connect} from 'react-redux';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import {loginUser} from '../modules/reducer';
import {hideSpinner} from '../../registration/modules/reducer';

const mapStateToProps = state => ({
  isLogedIn: state.login.isLogedIn || false,
});

const mapActionCreators = {
  loginUser,
  hideSpinner
};

const LoginContainer = connect(
  mapStateToProps,
  mapActionCreators,
)(AuthorizationForm);

export default LoginContainer;
