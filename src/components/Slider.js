import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const Slider = () => {
  return (
    <View>
     <View style={styles.sliderContainer}>
     <Swiper autoplay={true}>
     <View style={styles.slider}>
     <Image source={require('../assets/1.png')} style={styles.image}/>
     </View>
     <View style={styles.slider}>
     <Image source={require('../assets/2.png')} style={styles.image}/>
     </View>
     <View style={styles.slider}>
     <Image source={require('../assets/3.jpg')} style={styles.image}/>
     </View>
     </Swiper>
     </View>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  sliderContainer:{
    width:'100%',
    height:200,
    marginVertical:10,
    paddingHorizontal:10,

  },
  slider:{
    width:'100%',
    height:200,
    justifyContent:"center",
    alignItems:"center",
  },
  image:{
    width:'100%',
    height:"100%",
    borderRadius:20,
  }
})