import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { View, Button, Text, Switch } from 'native-base';

class BtnSettings extends Component {
  render() {

    var { settingsButton, settingsText } = styles;

    return (
      <View style={{ borderBottomColor: '#EEEEEE', borderBottomWidth: 0.5 }}>
        <Button full light style={settingsButton} onPress={this.props.onPress}>
          <Text style={settingsText}>{this.props.text}</Text>
        </Button>
      </View>
    )
  }
}



const styles = {
  settingsButton: {
    height: 60,
    justifyContent: "flex-start",
  },
  settingsText: {
    fontFamily: 'sans-serif-light',
    fontSize: 18
  }

}

export default BtnSettings;