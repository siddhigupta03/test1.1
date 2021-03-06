import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Normal extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text style={styles.text}>
               The force that a solid surface exerts on any object in the normal direction is called the normal force.
              </Text>
              <Image style={styles.img} source={require('../assets/normal.jpeg')}></Image>
          </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 70,
    height:70
  },
  text:{
    textAlign: 'center',
    margin:5,
  }
});
