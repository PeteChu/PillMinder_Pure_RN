import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Button
} from 'native-base';

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          {this.props.headerLeft}
        </Left>
        <Body>
          <Title>{this.props.headerText}</Title>
        </Body>
        <Right>
          {this.props.headerRight}
        </Right>
      </Header>
    )
  };

}

export default AppHeader;