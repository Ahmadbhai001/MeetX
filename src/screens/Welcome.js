import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider, Button} from 'react-native-paper';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wecomeText}>Welcome To MeetX</Text>
      <View style={{height: '80%', width: '80%'}}>
        <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        <Divider style={{width: '100%'}} />
        <View >
        <Text style={styles.tagLine}>fast. fresh. delicious.</Text>
        <Divider style={{width: '100%'}} />
      </View>
      <View style={styles.btn}>
      <TouchableOpacity>
      <Text style={styles.btnTex}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.btnTex}>SIGN UP</Text>
      </TouchableOpacity>
      </View>
      </View>
      
      
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    //  display:"flex",
    backgroundColor: '#001a00',
    justifyContent: 'center',
    alignItems: 'center',
      height:'100%',
     width:"100%",
  },
  logoImg: {
    height: '50%',
    width: '100%',
  },
  wecomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    borderRadius: 30,
     padding: 8,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    textTransform: 'uppercase',
  },
  tagLine: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    color:"#ffffff"
  },
  btn: {
    flexDirection: 'row',
     marginVertical:180,
    justifyContent:"space-around",
    
    
  },
  btnTex:{
    backgroundColor:"#ffffff",
    color:'#001a00',
     paddingHorizontal:40,
     paddingVertical:20,
    borderRadius:20,

    fontSize: 15,
    fontWeight: 'bold',
  }
});
