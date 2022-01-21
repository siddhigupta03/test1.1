import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Card } from 'react-native-paper';

import Mascular from '../Cforces/Mascular';
import Friction from '../Cforces/Friction';
import Normal from '../Cforces/Normal';
import Tension from '../Cforces/tension';

export default class Intro extends Component {
    render() {
        return(
            <View style={styles.con}>
                <Text style={styles.header}>FORCE-Types</Text>
                <Text style={styles.text}>There are 4 types of Contact forces:-</Text>
                <ScrollView>
                    <Card style={{marginTop:20}}> <Mascular/> </Card>
                    <Card style={{marginTop:20}}> <Friction/> </Card>
                    <Card style={{marginTop:20}}> <Normal/> </Card>
                    <Card style={{marginTop:20}}> <Tension/> </Card>
                </ScrollView>
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
});