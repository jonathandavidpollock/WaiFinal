import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Application from './src/containers/Application';
import store from './src/redux/store';
 
export default class DiscoveryChurchApplication extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
 