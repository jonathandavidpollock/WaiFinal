import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


class LoginForm extends Component {
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={480} style={styles.container}>
                <TextInput 
                    placeholder="email" 
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    returnKeyType="next"
                    onSubmitEditing={()=> this.passwordInput.focus()}
                    style={styles.input}
                    />
                <TextInput 
                    placeholder="password" 
                    style={styles.input}
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    returnKeyType="go"
                    ref={input => this.passwordInput = input}
                    secureTextEntry
                    />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input : {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height:50,
        marginBottom: 20,
        color:"#ffffff",
        paddingHorizontal: 20
    },
    buttonContainer: {
        backgroundColor:'#41873f',
        paddingVertical: 10,
        marginBottom: 20
    },
    buttonText: {
        textAlign:'center',
        color:'#ffffff',
        fontWeight:'700',
    }
})

export default LoginForm;