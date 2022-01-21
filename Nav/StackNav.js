import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../screens/introduction'
import Types from './TabNav'

const Stack = createStackNavigator();

export default class extends Component {
    render() {
        return(
            <Stack.Navigator 
            initialRouteName='Introduction'
            screenOptions={{headerShown:false}}>
            <Stack.Screen name='Introduction' component={Intro}/>
            <Stack.Screen name='Types' component={Types}/>
            </Stack.Navigator>
        );
    }
}