import React, { Component } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Header, Content, Icon, Button } from 'native-base';
import Camera from 'react-native-camera';

class AppCamera extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.temp}
          defaultTouchToFocus>

          <Button onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text>[CAPTURE]</Text>
          </Button>
        </Camera>
      </Container>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => {
        
      })
      .catch(err => console.error(err));
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 40,
    alignItems: 'center',
    alignSelf: 'center'
  }
});

export default AppCamera;