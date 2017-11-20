import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text
} from 'native-base';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase'

class SignInScreen extends Component {


  componentDidMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true })
      .then(() => {

      })
      .catch((err) => {
        console.log("Play service error", err.code, err.message);
      })
  }

  render() {

    const { rootContainer, appLogo, loginButton } = styles;
    return (
      <Container style={rootContainer}>
        <Content>
          <Image source={require('./../../public/images/logo.png')} style={appLogo} resizeMode="contain" />
          <GoogleSigninButton
            style={loginButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this.doGoogleSignin.bind(this)}
          />
        </Content>
      </Container>
    )
  }

  goToHomeScreen() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    })

    this.props.navigation.dispatch(resetAction);
  }

  doGoogleSignin() {
    GoogleSignin.configure()
      .then(() => {
        GoogleSignin.signIn()
          .then((data) => {
            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)

            // login with credential
            return firebase.auth().signInWithCredential(credential)
          })
          .then((currentUser) => {
            if (currentUser != null) {
              this.goToHomeScreen()
            }
            // console.info(JSON.stringify(currentUser.toJSON()))
          })
          .catch((error) => {
            console.error(`Login fail with error: ${error}`)
          })
      })
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
    width: 312,
    height: 48,
    justifyContent: 'space-around',
    margin: 20,
  }
}

export default SignInScreen;