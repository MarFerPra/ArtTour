import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
})

const NavigationHeader = () => {
  return (
    <View style={styles.nav}>
      <Link
        to="/info"
        underlayColor='#f0f4f7'
        style={styles.navItem}>
          <Text>Information</Text>
      </Link>
      <Link
        to="/scanner"
        underlayColor='#f0f4f7'
        style={styles.navItem} >
          <Text>Scanner</Text>
      </Link>
    </View>
  )
};


export default NavigationHeader;
