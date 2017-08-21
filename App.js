import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Messages from './screens/Messages'
import More from './screens/More'
import Events from './screens/Events'
// import { Home, Messages, More, Events } from './screens'

export const Heading = StackNavigator({
  Home: {
    screen: Home, 
    navigationOptions: {
      title:`Discovery`.toUpperCase(),
      headerStyle: {
        backgroundColor:'#41873f',
      },
      headerTintColor:'#ffffff'
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      title:"Messages", 
    }
  },
  Events: {
    screen: Events,
    navigationOptions: {
      title:"Events"
    }
  },
  More: {
    screen: More,
    navigationOptions: {
      title:"More"
    }
  },
})

const Navigation = TabNavigator({
  Home: {screen: Heading},
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
