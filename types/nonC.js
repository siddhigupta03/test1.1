import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Card } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";

import Magnetic from '../NonCon/magnetic';
import Electro from '../NonCon/magnetic';
import Gravity from '../NonCon/magnetic';

export default class Intro extends Component {
    render() {
        return(
            <View style={styles.con}>
                <Text style={styles.header}>FORCE-Types</Text>
                <Text>There are 4 types of Contact forces:-</Text>
                <Card style={{marginTop:20}}> <Magnetic/> </Card>
                <Card style={{marginTop:20}}> <Electro/> </Card>
                <Card style={{marginTop:20}}> <Gravity/> </Card>
            </View>
        )
    }
}