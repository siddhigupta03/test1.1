import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Electro extends Component {
  render() {
      return(
          <View style={styles.con}>
              <Text style={styles.header}>Net Force</Text>
              <Text style={styles.text}>
                The forces acting on the car are shownin the FBD (Free body diagram): 
              </Text>
              <Text style={styles.text2}>
                  They are:\nForce applied by the engine=F,\nFriction applied by road=f\nNormal forces are N1 and N2\nGravitational force (Fg)=W\nNet force along x-axis or direction\nFnet, x=f-F\nNet force along y-axis or direction\nFnet, y = N1+ N2- W
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
  },
  header:{
    backgroundColor:'red',
    fontSize: 25,
    margin: 15,
    color:'#fff',
    fontWeight: 'bold'
  },
});
