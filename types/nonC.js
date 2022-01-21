import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Card } from 'react-native-paper';

import Magnetic from '../NonCon/magnetic';
import Electro from '../NonCon/electrostatic';
import Gravity from '../NonCon/gravity';

export default class Intro extends Component {
    render() {
        return(
            <View style={styles.con}>
                <Text style={styles.header}>FORCE-Types</Text>
                <Text style={styles.text}>There are 4 types of Contact forces:-</Text>
                <Card style={{marginTop:20}}> <Magnetic/> </Card>
                <Card style={{marginTop:20}}> <Electro/> </Card>
                <Card style={{marginTop:20}}> <Gravity/> </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    con:{
        flex:1
    },
    header:{
        backgroundColor:'red',
        fontSize: 25,
        margin: 15,
        color:'#fff',
        fontWeight: 'bold'
    },
    text:{
        margin:3,
        fontSize: 15
    }
})