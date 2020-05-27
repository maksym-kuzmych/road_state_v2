import {connect} from 'react-redux';
import Spinner from '../formComponent/index';
import {hideSpinner} from '../../auth/registration/modules/reducer';

const mapStateToProps = state => ({
  isLoading: state.register.isLoading || false,
});

const mapActionCreators = {
  hideSpinner,
};

const SpinnerContainer = connect(
  mapStateToProps,
  mapActionCreators,
)(Spinner);

export default SpinnerContainer;