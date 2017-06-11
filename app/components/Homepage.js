import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NavigationHeader from './NavigationHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const Homepage = (props) => {
  return (
    <View>
      <NavigationHeader />
      <Text>
        Homepage
      </Text>
    </View>
  );
};

export default Homepage;
