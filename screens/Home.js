import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
      };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Home Page</Text>
                <Button
                    onPress= {
                        ()=> navigate("Second", {})
                        }
                    title="Go to Screen 2"
                    
                     /> 
            </View>
        )
    }
}