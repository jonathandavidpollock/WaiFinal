import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Home, Messages, More, Events, Login } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth';

const SideBar = DrawerNavigator({
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
  
export default SideBar