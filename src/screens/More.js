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
                    <Button title="View Map" color="#C3C3C3" accessibilityLabel="View our church map" style={styles.btn} onPress={()=> console.log('e')}/>
                    <Button title="Give" color="#C3C3C3" style={styles.btn} accessibilityLabel="Give to Discovery Church" onPress={()=> console.log('e')}/>
                    <Button title="Instagram" color="#C3C3C3" style={styles.btn} accessibilityLabel="Follow us on Instagram" onPress={()=> console.log('e')}/>
                    <Button title="Twitter" color="#C3C3C3" style={styles.btn} accessibilityLabel="Follow us on Twitter" onPress={()=> console.log('e')}/>
                    <Button title="Facebook" color="#C3C3C3" style={styles.btn} accessibilityLabel="Vist our Facebook page" onPress={()=> console.log('e')}/>
                    <Button title="Website" color="#C3C3C3" style={styles.btn} accessibilityLabel="Visit our website" onPress={()=> console.log('e')}/>
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
    },
    descriptionArea: {
        backgroundColor:'#222222',
    },
    description: {
        color:'#888888',
    },
    btn: {
        backgroundColor:'#1A1A1A',
        margin:100,
        color:'#C3C3C3',
    }

})
