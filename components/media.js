import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import img from '../img/WatchLive.jpg'


const Media = () => {
        return (
            <View style={styles.mediaContainer}>
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
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.subText}>Watch Live</Text>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    mediaContainer: {

    },
    imageContainer: {
       flexDirection:'row'
    },
    img: {
        width:160,
        height:160,
    },
    contentContainer: {

    },
    subText:{
        fontSize:12,
        color:'#D0D0D0'
    }
})

export default Media;