import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Messages extends Component {
    static navigationOptions = {
        title: 'Messages',
        tabBarIcon: ({tintColor})=><Icon name="ios-bookmarks-outline" size={32} color={tintColor}/> 
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