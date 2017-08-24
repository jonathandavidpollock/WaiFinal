import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Events extends Component {
    static navigationOptions = {
        tabBarLabel: 'Events',
        tabBarIcon: ({tintColor})=><Icon name="ios-calendar-outline" size={32} color={tintColor} />,
      };
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>

            </View>
        )
    }
}