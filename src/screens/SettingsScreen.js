import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Icon,
} from 'native-base';
import firebase from 'react-native-firebase';
import AppHeader from '../components/Header';
import BtnSettings from '../components/BtnSettings';

class Menu extends Component {
  render() {
    return (
      <Container>
        <AppHeader
          headerText={"Setting"}
          headerLeft={
            <Button onPress={this._onMenuPressed.bind(this)}>
              <Icon name='menu' />
            </Button>
          }
        />

        <Content>
          <ScrollView>
            <BtnSettings
              text={"Language"}
              onPress={() => {
                ToastAndroid.show("Language", ToastAndroid.SHORT)
              }}
            />
            <BtnSettings
              text={"Log Out"}
              onPress={() => {
                firebase.auth().signOut().then(() => {
                  // Sign-out successful.
                  this.props.navigation.navigate('Main');
                }).catch((error) => {
                  // An error happened.
                });
              }}
            />
          </ScrollView>
        </Content>


      </Container>
    )
  };

  _onMenuPressed() {
    this.props.navigation.navigate("DrawerToggle");
  }
}

export default Menu;