import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import img from '../img/WatchLive.jpg'


const Media = () => {
        return (
            <View style={styles.mediaContainer}>
                <View style={styles.imageContainer}>
                    <TouchableHighlight>
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

    },
    img: {

    },
    contentContainer: {

    },
    subText:{
        
    }
})

export default Media;