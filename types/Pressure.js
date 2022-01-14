import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Electro extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text style={styles.text}>
                The effect of force depends on the area of contact on which the force is acting. When there is a decrease in the area of contact of the force or load then the effect of force increases and vice versa. The force acting perpendicularly on unit area of a surface is called pressure. Pressure = Force/Area The unit of pressure in S.I. system is Newton/meter2 or N/m2.
              </Text>
              <Image style={styles.img} source={require('../assets/pressure.png')}></Image>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  con:{
      flex:1
  },
  text:{
      margin:3,
      fontSize: 15
  },
  img:{
    width:70,
    height:70
  }
})