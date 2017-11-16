import React, { Component } from 'react';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
import { Actions } from 'react-native-router-flux';


class TabNavigator extends Component {


  render() {
    return (
      <FooterTab>
        <Button active>
          <Icon name="home" />
        </Button>
        <Button onPress={this.onCameraPress.bind(this)}>
          <Icon name="camera" />
        </Button>
        <Button>
          <Icon name="person" />
        </Button>
      </FooterTab>
    )
  };

  onCameraPress() {
    Actions.camera();
  }

}

export default TabNavigator;