import {StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  return (
    
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          color: '#ffffff',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Log In
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
          }}
          style={styles.textinput}
          TextEntry
          label="Email"
          left={
            <TextInput.Icon
              icon="account-circle-outline"
              iconColor={
                emailfocus === true ? (color = 'red') : (color = 'black')
              }
              size={30}
            />
          }
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          onFocus={() => {
            setEmailfocus(false);
            setPasswordfocus(true);
          }}
          style={styles.textinput}
          TextEntry
          label="Password"
          secureTextEntry
          left={
            <TextInput.Icon
              icon="lock-outline"
              iconColor={
                passwordfocus === true ? (color = 'red') : (color = 'black')
              }
              size={30}
            />
          }
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity>
          <Text style={styles.btnTex}>Login In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgot}>Forgot Password</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.Sinwith}>Sign in with</Text>

      {/* FaceBook,Google Buttons */}
      <View style={{}}>
        <TouchableOpacity style={styles.facebookBtn}>
          <Icon
            name="facebook"
            // iconColor="white"
            color="#ffffff"
            size={30}
            style={{paddingHorizontal: 5, padding: 5}}
          />
          <Text
            style={{
              fontSize: 20,
              //  paddingRight: 40,
              fontWeight: '800',
              color: '#ffffff',
            }}>
            Sign with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleBtn}>
          <Icon
            name="google"
            color="#1c6897"
            size={30}
            style={{paddingHorizontal: 5, padding: 5}}
          />
          <Text
            style={{
              fontSize: 20,

              color: '#1c6897',
              fontWeight: '800',
            }}>
            Sign with Google
          </Text>
        </TouchableOpacity>
        {/* FaceBook,Google Buttons */}
      </View>
      {/* Divider Start */}
      <Divider style={{width: '80%', marginTop: 20}} />
      {/* Divider End*/}
      <View>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          Dont's have an account
          <Text
            style={{fontSize: 18, fontWeight: '800', color: '#ffffff'}}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
    
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
paddingTop:5,
    backgroundColor: '#0c2c41',
  
  },
  textInputContainer: {
    width: '90%',
    //  margin: 10,
    padding: 5,
  },
  textinput: {
    // Radius: 20,
  },
  btn: {
    marginTop: 10,
    justifyContent: 'center',
    width: '80%',
  },
  btnTex: {
    backgroundColor: '#ffffff',
    color: '#1c6897',
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  forgot: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 15,
  },

  or: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    margin: 1,
  },

  Sinwith: {
    fontSize: 25,
    color: '#ffffff',
  },
  facebookBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267B2',
    borderRadius: 10,
    marginTop: 10,
    elevation: 20,
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6ffe6',
    borderRadius: 10,
    marginTop: 8,
  },
});
