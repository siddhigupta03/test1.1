import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Tension extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text>
               The force which always pulls the body along the string is called tension.
              </Text>
              <Image style={styles.img} source={require('../assets/tension.jpeg')}></Image>
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
