import React, { Component } from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import reducers from './reducers'

import RootNavigator from './navigators/RootNavigator';

class App extends Component {

  render() {

    var store = configureStore()

    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  };
}

export default App;