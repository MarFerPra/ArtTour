import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import NavigationHeader from './NavigationHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

class Scanner extends Component {
  onRead(e) {
    console.log(JSON.parse(e.data));
  }

  render() {
    return (
      <View>
        <NavigationHeader />
        <Text>aaaa</Text>
        <QRCodeScanner onRead={this.onRead.bind(this)} />
        <Text>aaaa</Text>
      </View>
    );
  }
};

export default Scanner;
