import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Maascular extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text>
                  The force which we exert by using our body muscles is known as muscular force.
              </Text>
              <Image style={styles.img} source={require('../assets/mascular.jpeg')}></Image>
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
