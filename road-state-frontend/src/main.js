import React from 'react';
import createStore from './store/createStore';
import AppContainer from './AppContainer/index';
import Geocoder from 'react-native-geocoding';

const GOOGLE_MAPS_APIKEY = 'AIzaSyArRVqnpPHZ-q2BMzjM62NmsU0885mHvLs';

export default class Root extends React.Component {
  componentDidMount() {
    Geocoder.init(GOOGLE_MAPS_APIKEY);
  }

  renderApp() {
    const initialState = window.__INITIAL_STATE__;
    const store = createStore(initialState);

    return <AppContainer store={store} />;
  }

  render() {
    return this.renderApp();
  }
}
