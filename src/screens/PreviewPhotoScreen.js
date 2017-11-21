import React, { Component } from 'react';
import { Image, Text, ToastAndroid, Dimensions, View } from 'react-native';
import { Container } from 'native-base';

class PreviewPhotoScreen extends Component {

  state = {
    photoData: null
  }

  componentWillMount() {

    const { state } = this.props.navigation

    if (state.params.photo != null) {
      this.setState({
        photoData: state.params.photo
      })
    }

  }

  render() {
    return (
      <Container>
        {this.state.photoData.path ? this._renderImage() : null}
      </Container>
    );
  }

  _renderImage() {
    return (
      <Image
        source={{ uri: this.state.photoData.path }}
        style={styles.preview}
      />
    );
  }
}

const styles = {
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
}

export default PreviewPhotoScreen;