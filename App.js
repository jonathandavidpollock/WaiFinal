import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Home from './screens/Home'
import Messages from './screens/Messages'
import More from './screens/More'
import Events from './screens/Events'
// import { Home, Messages, More, Events } from './screens'

const Navigation = TabNavigator({
  Home: {screen: Home},
  Messages: {screen: Messages},
  Events: {screen: Events},
  More: {screen: More},
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#1A1B1C',
    },
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#969798',
  }
});


export default Navigation
