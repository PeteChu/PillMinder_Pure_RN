import React, { Component } from 'react';
import firebase from 'react-native-firebase'

import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';

class MainScreen extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user })
      }
    })
  }


  render() {
    return this.state.user != null ? <HomeScreen /> : <SignInScreen />;
  }
}

export default MainScreen;