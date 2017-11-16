import React from 'react';
import { Container, Header, Left ,Body, Title, Icon } from 'native-base';

const AppHeader = (props) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>{props.headerText}</Title>
        </Body>
      </Header>
    </Container>
  );
};

export default Header;