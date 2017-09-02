import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native';
import { NativeRouter, Route, Redirect } from 'react-router-native';

import store from './app/store';
import EntryCode from './app/components/EntryCode';
import Information from './app/components/Information';
import NavBar from './app/components/NavBar';
import LandingPage from './app/components/LandingPage';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/code" component={EntryCode} />
        <Route path="/info" component={Information} />
      </View>
    </NativeRouter>
  </Provider>
)

export default App;
