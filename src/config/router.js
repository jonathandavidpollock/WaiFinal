import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Home, Messages, More, Events, Login } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth';
import * as ActionCreators from '../redux/actions/auth'
import bindActionCreators from 'redux'
import {EventsStack, HomeStack, MessagesStack, MoreStack} from '../config/combinedRouters'
  

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
  },
  logout: {
    color: '#ffffff',
    paddingRight:10,
  }
})

 
const mapStateToProps = (state, ownProps) => ({isLoggedIn: state.auth.isLoggedIn});
const mapDispatchToProps = (dispatch) => ({ onLogout: () => { dispatch(logout())}})

export default connect(mapStateToProps, mapDispatchToProps)(Router)
