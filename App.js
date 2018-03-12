import React, { Component } from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation
} from '@expo/ex-navigation';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: Each',
  'Warning: Failed',
  'Remote',
  'Module',
  'Possible',
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps',
  'Warning: componentWillUpdate'
]);

import Router from './navigation/routes';

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('layout')} />
      </NavigationProvider>
    );
  }
}
