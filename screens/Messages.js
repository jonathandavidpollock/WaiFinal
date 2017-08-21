import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'


export default class Messages extends Component {
    static navigationOptions = {
        title: 'Messages',
      };
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Text>This is the Message Page</Text>
                <Button 
                    title="Back to Home"
                    onPress={
                        ()=> navigate("Home",{})
                    }/>
            </View>
        )
    }
}