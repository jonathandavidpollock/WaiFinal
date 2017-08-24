import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Dimensions, Image } from 'react-native'
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
            <View>
                <View style={styles.imageContainer}>
                    <Image
                        source={logo}
                        style={styles.logo}
                        />
                </View>
                <View style={styles.mainContent}>
                    <Button title="Twitter" onPress={()=> console.log('e')}/>
                    <Button title="Facebook" onPress={()=> console.log('e')}/>
                    <Button title="Website" onPress={()=> console.log('e')}/>
                    <Button title="Twitter" onPress={()=> console.log('e')}/>
                    <Button title="Twitter" onPress={()=> console.log('e')}/>
                    <Button title="Twitter" onPress={()=> console.log('e')}/>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#222222',
    },
    mainContent: {
        backgroundColor:'#222222'
    },
    imageContainer: {
        alignSelf:'stretch',
        flexDirection:'row',
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
    }

})
