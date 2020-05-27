import {connect} from 'react-redux';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import {getLocale} from '../modules/reducer';
import {loginUser} from '../../auth/authorization/modules/reducer';

const mapStateToProps = state => ({
  locale: state.profile.locale || 'ru',
  isLogedIn: state.login.isLogedIn || false,
});

const mapActionCreators = {getLocale, loginUser};

const ProfileContainer = connect(
  mapStateToProps,
  mapActionCreators,
)(ProfileScreen);

export default ProfileContainer;
