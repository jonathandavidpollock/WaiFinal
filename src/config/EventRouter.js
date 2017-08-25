import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Home, Messages, More, Events, Login } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth';

const EventsStack = StackNavigator({
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

  export default EventsStack