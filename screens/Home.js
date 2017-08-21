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
            <ScrollView  contentContainerStyle={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={logo}
                        style={styles.logo}
                        />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.mediaContainer}>
                     {getMedia()}
                    </View>
                    <View style={styles.mediaContainer}>
                     {getMedia()}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const getMedia = () => {
    return(
        <View>
            <Media/>
            <Media/>
            <Media/>
            <Media/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#222222',
    },
    imageContainer: {
        height:150,
        alignSelf:'stretch',
        flexDirection:'row',
    },
    logo: {
        alignSelf:"stretch",
        height:150
    },
    mediaContainer: {
        margin:15,
    },
    contentContainer: {
        flexDirection:'row'
    }

})
