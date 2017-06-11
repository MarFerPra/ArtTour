import Homepage from './app/components/Homepage';
import Infopage from './app/components/Infopage';
import Scanner from './app/components/Scanner';

import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './app/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={Homepage}/>
      <Route path="/info" component={Infopage}/>
      <Route path="/scanner" component={Scanner}/>
    </View>
  </NativeRouter>
)

const ArtTour = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

AppRegistry.registerComponent('ArtTour', () => ArtTour);
