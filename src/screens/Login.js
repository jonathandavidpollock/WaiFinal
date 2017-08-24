import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../img/DClogo.png'
import Media from '../components/media'
import LoginForm from '../components/LoginForm'

export default class Login extends Component {   
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.title}>Our mission is to make disciples</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#222222',
        flex:1
    },
    logoContainer: {
        alignItems:"center",
        flexGrow:1,
        justifyContent:"center"
    },
    logo: {
        width:100,
        height:116
    },
    title:{
        color:"#ffffff",
        marginTop:10,
        width:160,
        textAlign:'center',
        opacity:0.9
    }


})
