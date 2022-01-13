import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from "react-native";
import * as Font from "expo-font"; 
import { RFValue } from "react-native-responsive-fontsize";

export default class Intro extends Component {
    render() {
        return(
            <View style={styles.con}>
                <Text style={styles.header}>FORCE-Introduction</Text>
                <Text>Force is a push or a pull.</Text>

                <Text>There are two types of forces:-</Text>

                <Text>
                    <Text>Force which results when there is a physical contact between two objects is known as Contact force.</Text>
                </Text>

                <Text>There are 4 types of contact forces</Text>
                <Text>1. Mascular Force, 2. Frictional Force, 3.Normal Force, 4. Tension</Text>

                <Text>
                    <Text>Force which results whithout any physical contact is known as Non-contact force.</Text>
                </Text>

                <Text>There are 3 types of contact forces</Text>
                <Text>1. Magnetic Force, 2. Gravitational Force, 3.Electrostatic Force</Text>

            </View>
        )
    }
}