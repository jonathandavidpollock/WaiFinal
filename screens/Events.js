import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Events extends Component {
    static navigationOptions = {
        tabBarLabel: 'Events',
        tabBarIcon: ()=><Icon name="ios-calendar-outline" size={32} /> 
      };
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Text>This is the Events Page</Text>
                <Button 
                    title="Back to Home"
                    onPress={
                        ()=> navigate("Home",{})
                    }/>
            </View>
        )
    }
}