import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Magnetic extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text>
               Like poles repel or push each other away and unlike poles attract or pull each other. This action of pull or push arises due to a magnetic force.
              </Text>
              <Image style={styles.img} source={require('../assets/magnetic.jpeg')}></Image>
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
