import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class Intro extends Component {
    render() {
        return(
            <View style={styles.con}>
                <Text style={styles.header}>FORCE Introduction</Text>
                <Text style={{textAlign:'center',fontSize:22, marginTop:20}}>Force is a push or a pull.</Text>
                <Text style={styles.text1}>There are two types of forces:-</Text>
                    <Text style={styles.text2}>Force which results when there is a physical contact between two objects is known as Contact force.</Text>
                <Text style={styles.text3}>There are 4 types of contact forces</Text>
                <Text style={styles.text3}>1. Mascular Force, 2. Frictional Force, 3.Normal Force, 4. Tension</Text>
                    <Text style={styles.text2}>Force which results whithout any physical contact is known as Non-contact force.</Text>
                <Text style={styles.text3}>There are 3 types of contact forces</Text>
                <Text style={styles.text3}>1. Magnetic Force, 2. Gravitational Force, 3.Electrostatic Force</Text>
                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("Types")}>
                    <Text style={styles.text2}>Types of Non Contact and Contact forces</Text>
                </TouchableOpacity>
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
        paddingTop: 40,
        color:'#fff',
        fontWeight: 'bold',
        paddingLeft:25,
        paddingBottom: 10
    },
    text1:{
        margin:8,
        fontSize: 15,
        fontWeight:'bold'
    },
    text2:{
        fontSize:12,
        fontWeight:'700',
        margin:5,
    },
    text3:{
        fontSize:10,
        margin:5,
    }
})