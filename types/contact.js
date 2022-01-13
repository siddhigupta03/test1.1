import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Card } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";

import Mascular from '../Cforces/Mascular';
import Friction from '../Cforces/Friction';
import Normal from '../Cforces/Normal';
import Tension from '../Cforces/tension';

export default class Intro extends Component {
    render() {
        return(
            <View style={styles.con}>
                <Text style={styles.header}>FORCE-Types</Text>
                <Text>There are 4 types of Contact forces:-</Text>
                <Card style={{marginTop:20}}> <Mascular/> </Card>
                <Card style={{marginTop:20}}> <Friction/> </Card>
                <Card style={{marginTop:20}}> <Normal/> </Card>
                <Card style={{marginTop:20}}> <Tension/> </Card>
            </View>
        )
    }
}