import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Home, Messages, More, Events, Login } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth';
import * as ActionCreators from '../redux/actions/auth'
import bindActionCreators from 'redux'


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

// function userLogout(e) {
//   this.props.onLogout();
//   e.preventDefault();
// }

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
      headerRight:(
        <TouchableOpacity onPress={() => console.log(this)}>
          <Icon name="ios-power-outline" size={28} style={styles.logout} />
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
  },
  logout: {
    color: '#ffffff',
    paddingRight:10,
  }
})

 
const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogout: () => { dispatch(logout()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)
