import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="light-content"
        showHideTransition="slide"
      />
      <Routes />
    </NavigationContainer>
  );
}
