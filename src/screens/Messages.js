import React, { Component } from 'react'
import { Text, View, Button, ScrollView, StatusBar, StyleSheet, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../img/Main.jpg'

export default class Messages extends Component {
    static navigationOptions = {
        title: 'Messages',
        tabBarIcon: ({tintColor})=><Icon name="ios-bookmarks-outline" size={32} color={tintColor}/> 
      };
    render() {
        const {navigate} = this.props.navigation;
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.imageContainer}>
                <StatusBar barStyle="light-content" />
                    <Image
                        source={logo}
                        style={styles.logo}
                        />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        alignSelf:'stretch',
        flexDirection:'row',
        flex:1,
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    logo: {
        alignSelf:"stretch",
        width: Dimensions.get("window").width,
    },
})