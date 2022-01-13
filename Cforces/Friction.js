import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Friction extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text>
              Friction is the resistance to the movement of a body over the surface of another.
              </Text>
              <Image style={styles.img} source={require('../assets/friction.jpeg')}></Image>
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
