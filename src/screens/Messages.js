import React, { Component } from 'react'
import { Text, View, Button, ScrollView, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import logo from '../img/Main.jpg'
import Media from '../components/media'

export default class Messages extends Component {
    static navigationOptions = {
        title: 'Messages',
        tabBarIcon: ({tintColor})=><Icon name="ios-bookmarks-outline" size={32} color={tintColor}/> 
      };
    render() {
        const {navigate} = this.props.navigation;
        return(
            <ScrollView contentContainerStyle={styles.container}>
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
    container: {
        backgroundColor: '#222222',
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
})