import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ArtTour extends Component {
  onRead(e) {
    Linking.openURL(e.data).catch(err => console.error('An error occurred', err))
  }

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner onRead={this.onRead.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ArtTour', () => ArtTour);
