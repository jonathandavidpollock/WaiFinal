import React, { Component } from 'react'
import { Linking,TouchableHighlight,Text, View, Button, StyleSheet, Dimensions, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../img/Main.jpg'
export default class More extends Component {
    static navigationOptions = {
        title: 'More',
        tabBarIcon: ({tintColor})=><Icon name="ios-more-outline" size={32} color={tintColor}/> 
      };
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}> 
                <View style={styles.imageContainer}>
                    <Image
                        source={logo}
                        style={styles.logo}
                        />
                </View>
                <View style={styles.mainContent}>
                    <View style={styles.col1}>
                        <TouchableHighlight style={styles.btn} onPress={() =>
                            Linking
                                .openURL('https://www.google.com/maps/place/4400+S+Orange+Ave,+Orlando,+FL+32806/@28.4957556,-81.3779973,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77b7c55daa1d5:0x149a40781252ebc0!8m2!3d28.4957509!4d-81.3758086')
                                .catch(console.log("error in promise"))
                                }>
                            <Text style={styles.btnText}>View Map</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.btn} onPress={() =>
                            Linking
                                .openURL('https://discoveryfl.churchcenteronline.com/giving')
                                .catch(console.log("error in promise"))
                                }>
                            <Text style={styles.btnText}>Give</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.btn} onPress={() =>
                            Linking
                                .openURL('https://www.instagram.com/discoveryfl/')
                                .catch(console.log("error in promise"))
                                }>
                            <Text style={styles.btnText}>Instagram</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.col2}>
                         <TouchableHighlight style={styles.btn} onPress={() =>
                            Linking
                                .openURL('https://www.google.com/maps/place/4400+S+Orange+Ave,+Orlando,+FL+32806/@28.4957556,-81.3779973,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77b7c55daa1d5:0x149a40781252ebc0!8m2!3d28.4957509!4d-81.3758086')
                                .catch(console.log("error in promise"))
                                }>
                            <Text style={styles.btnText}>Twitter</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.btn} onPress={() =>
                            Linking
                                .openURL('https://discoveryfl.churchcenteronline.com/giving')
                                .catch(console.log("error in promise"))
                                }>
                            <Text style={styles.btnText}>Facebook</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.btn} onPress={() =>
                            Linking
                                .openURL('https://www.instagram.com/discoveryfl/')
                                .catch(console.log("error in promise"))
                                }>
                            <Text style={styles.btnText}>Website</Text>
                        </TouchableHighlight>
                    </View>
                </View> 
                <View style={styles.descriptionArea}>
                    <Text style={styles.description}>
                        A Christ-centered, Non-denominational Church 4400 S. 
                        Orange Ave. Orlando, FL 32806
                    </Text>
                    <Text style={styles.description}>
                        Our Mission is to make disciples of Jesus.
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#222222',
    },
    mainContent: {
        backgroundColor:'#222222',
        flexDirection:'column',
        flex:1,
    },
    imageContainer: {
        alignSelf:'stretch',
        flexDirection:'column',
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
    },
    descriptionArea: {
        backgroundColor:'#222222',
    },
    description: {
        color:'#888888',
        padding:10,
    },
    col1: {
        padding:10,
        justifyContent:'center',
        alignItems:'stretch',
    },
    col2: {
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },
    btn: {
        backgroundColor:'#1A1A1A',
        marginTop:30,
        padding:15,
        justifyContent:'center',
        
    },
    btnText: {
        color: '#ffffff',
        textAlign:'center'
    }

})
