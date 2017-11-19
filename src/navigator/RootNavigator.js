import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './../screens/HomeScreen';
import CameraScreen from './../screens/CameraScreen';
import SettingsScreen from './../screens/SettingsScreen';
import MedicationsScreen from './../screens/MedicationsScreen';

const RootNavigator = DrawerNavigator(
  {
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
  }, {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
)

export default RootNavigator;