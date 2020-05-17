import {connect} from 'react-redux';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import {getLocale} from '../modules/reducer';

const mapStateToProps = state => ({
  locale: state.profile.locale || 'ru',
});

const mapActionCreators = {getLocale};

const ProfileContainer = connect(
  mapStateToProps,
  mapActionCreators,
)(ProfileScreen);

export default ProfileContainer;
