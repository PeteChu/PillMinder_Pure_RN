import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text
} from 'native-base';

class SignInScreen extends Component {
  render() {
    const { rootContainer, appLogo, loginButton } = styles;
    return (
      <Container style={rootContainer}>
        <Content>
          <Image source={require('./../../public/images/logo.png')} style={appLogo} resizeMode="contain" />
          <Button rounded style={loginButton}>
            <Text>Facebook Login</Text>
          </Button>
          <Button rounded style={loginButton}>
            <Text>Google Login</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = {
  rootContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  loginButton: {
    flex: 1,
    width: 300,
    justifyContent: 'space-around',
    margin: 20,
  }
}

export default SignInScreen;