import React, { Component } from 'react';
import {
  View,
  Text,
} from 'native-base';

const MedForm = (props) => {

  const { containerStyle, title } = styles;

  return (
    <View style={containerStyle}>
      <Text style={title}>{props.titleText}</Text>
      <View>
        {props.children}
      </View>

    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#fff',

  },
  title: {
    color: "#1686C4",
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 15
  }
}

export default MedForm;