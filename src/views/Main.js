import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { Container } from 'native-base';
import Header from './../components/Header';

class Main extends Component {
  render() {

    const { header } = styles

    return (
      <Container>
        <Header style={header} headerText={'Home'}/>
      </Container>
    )
  };
}

const styles = {
  header: {
    paddingTop: StatusBar.currentHeight,
  }
}

export default Main;
