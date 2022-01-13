import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Electro extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text>
              The force exerted by a charged body on another charged body is known as electrostatic force
              </Text>
              <Image style={styles.img} source={require('../assets/electrostatic.jpeg')}></Image>
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
