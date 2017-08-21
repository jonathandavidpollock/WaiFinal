import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class More extends Component {
    static navigationOptions = {
        title: 'More',
        tabBarIcon: ()=><Icon name="ios-more-outline" size={32} /> 
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