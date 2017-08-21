import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Home from './screens/Home'
import SecondScreen from './screens/SecondScreen'

const Navigation = StackNavigator({
  Home: {screen: Home},
  Second: {screen: SecondScreen}
});


export default Navigation
