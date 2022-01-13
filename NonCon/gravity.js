import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Gravity extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text>
              If an object is thrown upwards, there exists a force which pulls it down towards the earth, because of this it falls down to the ground. We call this force as a gravitational force.
              </Text>
              <Image style={styles.img} source={require('../assets/gravity.jpeg')}></Image>
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
  }
});
