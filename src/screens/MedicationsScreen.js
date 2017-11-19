import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Icon,
} from 'native-base';

import AppHeader from './../components/Header';

class MedicationsScreen extends Component {
  render() {
    return (
      <Container>
        <AppHeader
          headerText={'Medications'}
          headerLeft={
            <Button onPress={this.onMenuPressed.bind(this)}>
              <Icon name='menu' />
            </Button>
          }
        />

        <Content>
          
        </Content>

      </Container>
    )
  };

  onMenuPressed() {
    this.props.navigation.navigate("DrawerToggle");
  }
};

export default MedicationsScreen;