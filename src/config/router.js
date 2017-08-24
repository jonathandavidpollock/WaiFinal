import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Home, Messages, More, Events, Login } from '../../src/screens'
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

export const HomeStack = StackNavigator({
  Home: {
    screen: Home, 
    navigationOptions: ({ navigation, tintColor }) => ({
      title:`Discovery`.toUpperCase(),
      headerStyle: {
        backgroundColor:'#41873f',
      },
      headerLeft:(
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="md-menu" size={28} style={styles.hamburger} />
        </TouchableOpacity>), 
      headerTintColor:'#ffffff'
    }),
  }
})

export const MessagesStack = StackNavigator({
  Messages: {
    screen: Messages, 
    navigationOptions: ({ navigation, tintColor }) => ({
      title:`Messages`.toUpperCase(),
      headerStyle: {
        backgroundColor:'#41873f',

      },
      headerLeft:(
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="md-menu" size={28} style={styles.hamburger} />
        </TouchableOpacity>), 
      headerTintColor:'#ffffff',
    }),
  }
})


export const EventsStack = StackNavigator({
  Events: {
    screen: Events, 
    navigationOptions: ({ navigation, tintColor }) => ({
      title:`Events`.toUpperCase(),
      headerStyle: {
        backgroundColor:'#41873f',
      },
      headerLeft:(
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="md-menu" size={28} style={styles.hamburger} />
        </TouchableOpacity>), 
      headerTintColor:'#ffffff'
    }),
  }
})


export const MoreStack = StackNavigator({
  More: {
    screen: More, 
    navigationOptions: ({ navigation, tintColor }) => ({
      title:`More`.toUpperCase(),
      headerStyle: {
        backgroundColor:'#41873f',
      },
      headerLeft:(
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="md-menu" size={28} style={styles.hamburger} />
        </TouchableOpacity>), 
      headerTintColor:'#ffffff'
    }),
  }
})

const Router = TabNavigator({
  Home: {screen: HomeStack},
  Messages: {screen: MessagesStack},
  Events: {screen: EventsStack},
  More: {screen: MoreStack},
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


export default Router
