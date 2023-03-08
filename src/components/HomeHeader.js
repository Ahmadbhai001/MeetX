import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
    <Entypo name="menu" size={30} color="#ffffff" />
      <View style={styles.inerContainer}>
      <Text style={{fontSize:20,color:"#ffffff",paddingRight:10}}>Meet-X</Text>
      <Ionicons name="fast-food-outline" size={30} color="#ffffff" />
      </View>
      
      <FontAwesome name="user-circle-o" size={30} color="#ffffff"/>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent:"space-between",
    width:"100%",
    padding:10,
    alignItems:"center",
    backgroundColor:"#1c6697",
    elevation:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  inerContainer:{
    flexDirection:"row",
    alignItems:"center",
    
  }
})