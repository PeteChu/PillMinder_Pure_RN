import React, { Component } from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'react-native-firebase';

import RootNavigator from './navigator/RootNavigator';

class App extends Component {

  render() {

    return (
      <Provider store={createStore}>
        <RootNavigator />
      </Provider>
    )
  };
}

export default App;