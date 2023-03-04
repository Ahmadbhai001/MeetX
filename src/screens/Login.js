import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          color: '#ffffff',
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Sign In
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
          <Text style={styles.btnTex}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgot}>Forgot Password</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.Sinwith}>Sign in with</Text>
      
      {/* Icons */}
      <View>
     
        
        <TouchableOpacity style={styles.facebookBtn}>
          <Icon
            name="facebook"
            iconColor="white"
            size={30}
            style={{paddingHorizontal: 10, paddingVertical: 5}}
          />
          <Text style={{fontSize: 20, paddingRight: 10 , fontWeight:"800",color:"#ffffff"}}>
            Sign with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleBtn}>
          <Icon
            name="google"
            color="#001a00"
            size={30}
            style={{paddingHorizontal: 10, paddingVertical: 5}}
          />
          <Text style={{fontSize: 20, paddingRight: 10,color:"#001a00", fontWeight:"800" }}>
            Sign with Google
          </Text>
        </TouchableOpacity>
      </View>
      <Divider style={{width: '100%', marginTop: 20}} />
      <View>
      <Text style={{fontSize: 15,fontWeight:"500"}}>Dont's have an account
      <Text style={{fontSize: 18,fontWeight:"800" ,color:"#ffffff"}}> Sign Up</Text>
      </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001a00',
  },
  textInputContainer: {
    width: '90%',
    margin: 10,
  },
  textinput: {
    borderBottomRightRadius: 20,
  },
  btn: {
     marginTop: 10,
    justifyContent: 'center',
    width: '100%',
  },
  btnTex: {
    backgroundColor: '#ffffff',
    color: '#001a00',
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 10,
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
    margin: 10,
  },
  Sinwith: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  facebookBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267B2',
    borderRadius: 10,
    marginTop: 10,
    elevation:20,
    
  },
  googleBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6ffe6',
    borderRadius: 10,
    marginTop: 10,
  }
});
