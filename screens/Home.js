import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ()=><Icon name="ios-list" size={32} /> 
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Home Page</Text>
            </View>
        )
    }
}