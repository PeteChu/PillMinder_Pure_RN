import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './../screens/HomeScreen';
import CameraScreen from './../screens/CameraScreen';
import PreviewPhotoScreen from './../screens/PreviewPhotoScreen';
import SettingsScreen from './../screens/SettingsScreen';
import MedicationsScreen from './../screens/MedicationsScreen';
import SignInScreen from './../screens/SignInScreen';
import MainScreen from './../screens/MainScreen';

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
          screen: StackNavigator({
            Camera: {
              screen: CameraScreen,
            },
            PreviewPhoto: {
              screen: PreviewPhotoScreen,
            }
          }, {
              headerMode: 'none'
            }),
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