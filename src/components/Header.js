import React from 'react';
import { Container, Header, Left, Body, Title, Icon } from 'native-base';

const AppHeader = (props) => {
  return (
    <Header>
      <Body>
        <Title>{props.headerText}</Title>
      </Body>
    </Header>
  );
};

export default AppHeader;