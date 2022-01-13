import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import NonContact from '../types/nonC';
import Contact from '../types/contact';
import NetForce from '../types/NetForce';
import Pressure from '../types/Pressure';

const Tab = createMaterialBottomTabNavigator();

export default class TabNav extends Component {
    render() {
        return(
            <Tab.Navigator
                labeled={false}
                barStyle={this.state.light_theme ? styles.bottomTabStyleL : styles.bottomTabStyle}
                screenOptions= {({route}) => ({
                    tabBarIcon: ({focused, color, size}) =>{
                        let iconName;
                        if(route.name === 'Feed') {
                            iconName = focused
                            ? 'home'
                            : 'home-outline'
                        } else if(route.name === 'Create'){
                            iconName= focused? "add-circle":"add-circle-outline"
                        }
                        return(
                            <Ionicons name = {iconName} size={size} color={color}
                            style={styles.icons}/>
                        )
                    }
                }) }
                    
                    activeColor='red'
                    inactiveColor = 'grey' >
                    <Tab.Screen name='Contact Force' component={Contact} />
                    <Tab.Screen name='Non Contact Force' component={NonContact} />
                    <Tab.Screen name='Net Force' component={NetForce} />
                    <Tab.Screen name='Pressure' component={Pressure} />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabStyle:{
        backgroundColor:'#2f345d',
        height:'8%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:'hidden',
        position:'absolute'
    },
    bottomTabStyleL:{
        backgroundColor:'#afbdef',
        height:'8%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:'hidden',
        position:'absolute'
    },
    icons:{
        width:RFValue(30),
        height:RFValue(30),
    },
});