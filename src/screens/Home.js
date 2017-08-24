import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
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
            <ScrollView  contentContainerStyle={styles.container}>
                <View style={styles.imageContainer}>
                <StatusBar barStyle="light-content" />
                    <Image
                        source={logo}
                        style={styles.logo}
                        />
                </View>
                {getMedia()}
            </ScrollView>
        )
    }
}


const getMedia = () => {
    return(
        <View style={styles.imageContainer}>
            <TouchableOpacity>
                <Media/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Media/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Media/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Media/>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#222222',
        flex:1
    },
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
    mediaContainer: {
        margin:15,
    },
    contentContainer: {
        flexDirection:'row'
    }

})