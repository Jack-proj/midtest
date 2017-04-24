import Expo from 'expo';
import React from 'react';
import { AppRegistry } from 'react-native';

// import App from './js/App';
import App from './src/App';

Expo.registerRootComponent('helpme', () => App);
