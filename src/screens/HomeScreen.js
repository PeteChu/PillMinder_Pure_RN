import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Left,
  Button,
  Icon,
  Fab,
  View,
  Text
} from 'native-base';
import AppHeader from './../components/Header';


class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container>
        <AppHeader
          headerText={'Pill Minder'}
          headerLeft={
            <Button onPress={this.onMenuPressed.bind(this)}>
              <Icon name='menu' />
            </Button>
          }
          headerRight={
            <Button onPress={this.onAddMedicinePressed.bind(this)}>
              <Icon name='add' />
            </Button>
          }
        />
        <Content>

        </Content>
      </Container>
    )
  }

  onHomePressed() {
    this.props.navigation.navigate('Home');
  }

  onCameraPressed() {
    this.props.navigation.navigate('Camera');
  }

  onAddMedicinePressed() {
    this.props.navigation.navigate('Medications')
  }

  onMenuPressed() {
    this.props.navigation.navigate('DrawerToggle');
  }
}

export default HomeScreen;