import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './../screens/HomeScreen';
import CameraScreen from './../screens/CameraScreen';
import SettingsScreen from './../screens/SettingsScreen';
import MedicationsScreen from './../screens/MedicationsScreen';
import SignInScreen from './../screens/SignInScreen';

const RootNavigator = StackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
    },
    Home: {
      screen: DrawerNavigator({
        Home: {
          screen: HomeScreen,
        },
        Camera: {
          screen: CameraScreen,
        },
        Medications: {
          screen: MedicationsScreen
        },
        Settings: {
          screen: SettingsScreen,
        }
      })
    }
  }, {
    headerMode: 'none'
  }
)


export default RootNavigator;