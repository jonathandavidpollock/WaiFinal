import React, { Component } from 'react'
import { FlatList, Text, View, Button,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Events extends Component {
    static navigationOptions = {
        tabBarLabel: 'Events',
        tabBarIcon: ({tintColor})=><Icon name="ios-calendar-outline" size={32} color={tintColor} />,
      };
    render() {
        const {navigate} = this.props.navigation;
        return(

            <FlatList
                data={[{key: 'Central Events'}, {key: 'Southwest Events'},{key: 'East Events'}]}
                renderItem={({item}) => <Text style={styles.listItem}>{item.key}</Text>}
            />

        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        fontSize:22,
        lineHeight:36,
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingLeft:10,
    }
})