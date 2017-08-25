import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet, Linking, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'
import img from '../img/WatchLive.jpg'


const Media = () => {
        return (
                <View style={styles.imageContainer}>
                    <TouchableHighlight onPress={() =>
                        Linking
                            .openURL('http://discoveryfl.churchonline.org/')
                            .catch(console.log("error in promise"))
                            }>
                        <Image
                            source={img}
                            style={styles.img}
                            />
                    </TouchableHighlight>
                    <Text style={styles.subText}>Watch Live</Text>
                </View>
        )
}

const styles = StyleSheet.create({
    mediaContainer: {
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:"space-around"
    },
    imageContainer: {
       flexDirection:'column',
       justifyContent:'center',
        marginBottom:20,
        marginTop:10
    },
    img: {
        flexDirection:'column',
        justifyContent:'center'
    },
    subText:{
        fontSize:12,
        color:'#D0D0D0'
    }
})

export default Media;