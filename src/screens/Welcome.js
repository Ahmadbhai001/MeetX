import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider, Button} from 'react-native-paper';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.wecomeText}>Welcome To MeetX</Text>
      <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
        coffee & pizza
      </Text>
      <View style={{height: '80%', width: '80%'}}>
        <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        <Divider style={{width: '100%', marginTop: 20}} />
        <View>
          <Text style={styles.tagLine}>fast. fresh. delicious.</Text>
          <Divider style={{width: '100%', marginTop: 20}} />
        </View>

        <View style={styles.btn}>
          <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
            <Text style={styles.btnTex}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.btnTexlogin}>Log In</Text>
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
    backgroundColor: '#0c2c41',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
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
    color: '#ffffff',
    borderStyle: 'solid',
    textTransform: 'uppercase',
  },
  tagLine: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    flexDirection: 'row',
    marginVertical: 120,
    justifyContent: 'space-around',
  },
  btnTex: {
    backgroundColor: '#ffffff',
    color: '#1c6897',
    padding: 20,
    paddingVertical: 15,
    borderRadius: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnTexlogin: {
    backgroundColor: '#ffffff',
    color: '#1c6897',
    padding: 30,
    paddingVertical: 15,
    borderRadius: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
