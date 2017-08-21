import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'


export default class More extends Component {
    static navigationOptions = {
        title: 'More',
      };
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Text>This is the Home Page</Text>
                <Button 
                    title="Back to Home"
                    onPress={
                        ()=> navigate("Home",{})
                    }/>
            </View>
        )
    }
}