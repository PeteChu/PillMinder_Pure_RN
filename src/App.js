import React, { Component } from 'react';
import { Container } from 'native-base'
import firebase from 'react-native-firebase';

import RootNavigator from './navigator/RootNavigator';

class App extends Component {

  render() {

    return (
      <Container>
        <RootNavigator />
      </Container>
    )
  };
}

export default App;