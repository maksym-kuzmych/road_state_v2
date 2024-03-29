import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import DrawerContainer from '../features/drawer/container/index';

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const {store} = this.props;

    return (
      <Provider store={store}>
        <DrawerContainer />
      </Provider>
    );
  }
}
