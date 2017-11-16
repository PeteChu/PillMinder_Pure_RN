import React from 'react';
import {
  Container,
  Content,
  Footer,
} from 'native-base';
import AppHeader from './../components/Header';
import TabNavigator from './../components/TabNavigator'


const Main = () => {
  return (
    <Container>
      <AppHeader headerText={'Home'} />
      <Content>
      </Content>
      <Footer>
        <TabNavigator />
      </Footer>
    </Container>
  )
}

export default Main;