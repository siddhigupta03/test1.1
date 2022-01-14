import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Electro extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text style={styles.text}>
              The forces acting on the car are shownin the FBD (Free body diagram): 
              </Text>
              <Text>
                  They are:
                    Force applied by the engine = F
                    Friction applied by road = f
                    Normal forces are N1 and N2
                    Gravitational force (Fg) = W
                    Net force along x-axis or direction
                    Fnet, x = f - F
                    Net force along y-axis or direction
                    Fnet, y = N1+ N2- W
              </Text>
              <Image style={styles.img} source={require('../assets/netForce.jpg')}></Image>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  con: {
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
    margin:3,
    fontSize: 15
  },
  text2:{
    margin:5,
    fontSize:12,
  }
});
