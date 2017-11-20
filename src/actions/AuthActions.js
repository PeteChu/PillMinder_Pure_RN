import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';


export const doGoogleSignin = () => {
  // Add configuration settings here:
  return GoogleSignin.configure()
  .then(() => {
    GoogleSignin.signIn()
    .then((data) => {
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)

      // login with credential
      return firebase.auth().signInWithCredential(credential)
    })
    .then((currentUser) => {
      console.info(JSON.stringify(currentUser.toJSON()))
    })
    .catch((error) => {
      console.error(`Login fail with error: ${error}`)
    })
  })
}