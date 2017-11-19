import React, { Component } from 'react';
import { Container } from 'native-base'
import firebase from 'react-native-firebase';

import RootNavigator from './navigator/RootNavigator';

import SignScreen from './screens/SignInScreen';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      });
  }

  render() {

    if (!this.state.isAuthenticated) {
      return null;
    }

    return (
      <Container>
        <RootNavigator />
      </Container>
    )
  };
}

export default App;