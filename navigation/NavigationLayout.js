import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from '@expo/ex-navigation';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import Router from './routes';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    renderBackground: props => {
      return (
        <LinearGradient
          start={[1.0, 0.0]}
          end={[0.0, 1.0]}
          colors={['#9963ea', '#cf392a']}
          style={{
            flex: 1,
            height: 200,
            width: Dimensions.get('window').width
          }}
        />
      );
    }
  }
};

export default class NavigationLayout extends Component {
  render() {
    return (
      <TabNavigation initialTab="about">
        <TabItem
          id="schedule"
          title="Schedule"
          renderIcon={isSelected => <FontAwesome name="calendar-o" size={32} />}
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>

        <TabItem
          id="about"
          //style={styles.TabItem}
          title="About"
          renderIcon={isSelected => <Feather name="info" size={32} />}
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

const styles = StyleSheet.create({
  TabNavigation: {
    height: 5
  },
  TabItem: {
    backgroundColor: 'black',
    color: 'white'
  },
  Image: {
    height: 20,
    width: 20
  },
  bgTop: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'stretch',
    height: '100%'
  }
});
