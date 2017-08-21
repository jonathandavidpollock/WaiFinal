import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'


export default class Events extends Component {
    static navigationOptions = {
        title: 'Events',
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