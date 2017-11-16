import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Main from './views/Main'
import Camera from './views/Camera'

const App = () => {
  return(
    <Router>
      <Scene key='root'>
        <Scene 
          key='main'
          component={Main}
          hideNavBar
          initial
        />
        <Scene 
          key="camera"
          component={Camera}
          hideNavBar
        />
      </Scene>
    </Router>
  )
}

export default App;