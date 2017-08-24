import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, Image, TouchableOpacity, View, Button,KeyboardAvoidingView, StatusBar, StyleSheet } from 'react-native';
import { login } from '../redux/actions/auth';
import Logo from '../img/DClogo.png'
 
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: '',
            placeholderUsername:'username',
            placeholderPassword: 'password',
        };
    }
 
    userLogin (e) {
        e.preventDefault();
        if(this.state.username != undefined || this.state.password != undefined) {
            this.props.onLogin(this.state.username, this.state.password);         
        } else {
            this.addError.bind(this)
        }
    }
 
    toggleRoute (e) {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
    }

    addError() {
        this.setState = {
            ...this.state,
            placeholderUsername:'⚠️ email',
            placedholderPassword:'⚠️ password'
        }
    }
 
    render () {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={480} style={styles.container}>
                    <StatusBar
                        barStyle="light-content"
                        />
                    
                    <View style={styles.logoContainer}>
                        <Image source={Logo} style={styles.logo}/>
                        <Text style={styles.title}>Our mission is to make disciples</Text>
                    </View>
                    <TextInput 
                        placeholder="email" 
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        returnKeyType="next"
                        onSubmitEditing={()=> this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={this.state.username} 
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(text) => this.setState({ username: text })}
                        />
                    <TextInput 
                        placeholder="password" 
                        style={styles.input}
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        returnKeyType="go"
                        ref={input => this.passwordInput = input}
                        secureTextEntry
                        value={this.state.password} 
                        onChangeText={(text) => this.setState({ password: text })}
                        />
                    <TouchableOpacity style={styles.buttonContainer} onPress={(e) => this.userLogin(e)} title={this.state.route}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text} onPress={(e) => this.toggleRoute(e)}>- {alt} -</Text>
                    </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}
 

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#222222',
        flex:1
    },
    input : {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height:50,
        marginBottom: 20,
        color:"#ffffff",
        paddingHorizontal: 20,
        borderWidth:2,
        borderColor:'rgba(236,167,44,.9)',
    },
    error : {
        borderWidth:2,
        borderColor:'rgba(236,167,44,.9)',
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
    },
    text: {
        textAlign:'center',
        color:'rgba(255,255,255,.8)',
        marginBottom:20
    }
})
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
        onSignUp: (username, password) => { dispatch(signup(username, password)); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);