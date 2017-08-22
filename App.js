import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Home, Messages, More, Events } from './screens'
import Icon from 'react-native-vector-icons/Ionicons'

export const SideBar = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawer: {
          label: 'Drawer 1',
          icon: ({ tintColor }) => <Icon name="" size={24} />
      },
  },
  },
  Inbox: {
    screen: Home
  },
  Settings: {
    screen: Home
  },
})

export const Heading = StackNavigator({
  Home: {
    screen: Home, 
    navigationOptions: ({ navigation, tintColor }) => ({
      title:`Discovery`.toUpperCase(),
      headerStyle: {
        backgroundColor:'#41873f',
      },
      headerLeft: <Icon name="md-menu" size={28} style={styles.hamburger} onPress={ () => navigation.navigate('DrawerOpen') } />,
      headerTintColor:'#ffffff'
    }),
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
  Home: {screen: Home},
  Messages: {screen: Messages},
  Events: {screen: Events},
  More: {screen: More},
}, {
  style: {
    backgroundColor:'#1A1B1C',
  },
  tabBarOptions: {
    style: {
      backgroundColor: '#1A1B1C',
    },
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#969798',
  }
});

const styles = StyleSheet.create({
  hamburger: {
    color:'#ffffff',
    paddingLeft:10,
  }
})

export default Heading
