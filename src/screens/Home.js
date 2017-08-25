import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../img/Main.jpg'
import Media from '../components/media'
import { logout } from '../redux/actions/auth';
import { connect } from 'react-redux';

class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Discovery',
        tabBarIcon: ({tintColor})=><Icon name="ios-list" size={32} color={tintColor} /> 
    };

    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView  contentContainerStyle={styles.container}>
                <Button onPress={(e) => this.userLogout(e)} title="Logout"/> 
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
            <Media />
            <Media />
            <Media />
            <Media />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#222222',
        flexDirection:'column',
    },
    imageContainer: {
        alignSelf:'stretch',
        flexDirection:'row',
        flex:2,
        flexWrap:'wrap',
        justifyContent:'space-around',
        flexBasis:50,
        flexGrow:1,

    },
    logo: {
        alignSelf:"stretch",
        flex:1,
        width: Dimensions.get("window").width,
    },
    mediaContainer: {
        margin:15,
    },
    contentContainer: {
        flexDirection:'row'
    }

})

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);