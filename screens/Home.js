import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../img/Main.jpg'
import Media from '../components/media'

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Discovery',
        tabBarIcon: ({tintColor})=><Icon name="ios-list" size={32} color={tintColor} /> 
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={logo}
                        style={styles.logo}
                        />
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Media/>
                    <Media/>
                    <Media/>
                    <Media/>
                    <Media/>
                    <Media/>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer: {
       
    },
    logo: {
        alignSelf:"stretch"

    },
    contentContainer: {
        flex: 1,
        backgroundColor:'#222222',
    }

})
