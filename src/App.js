import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import firebase from 'react-native-firebase';

import Main from './screens/Main';
import Camera from './screens/Camera';
import Menu from './screens/Menu';
import LoginScreen from './screens/LoginScreen';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then( () => {
        this.setState({
          isAuthenticated: true,
        });
      });
  }

  render() {

    if(!this.state.isAuthenticated) {
      return null;
    }

    return (
      <Router>
        <Stack key='root' hideNavBar={true}>
          <Scene key='login' component={LoginScreen} initial />
          <Scene key='main' component={Main} />
          <Scene key='Camera' component={Camera} />
        </Stack>
      </Router>
    )
  };
}

export default App;