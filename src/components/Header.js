import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Icon
} from 'native-base';

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>{this.props.headerText}</Title>
        </Body>
      </Header>
    )
  };

}

export default AppHeader;