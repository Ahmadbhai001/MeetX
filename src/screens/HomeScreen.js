import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import HomeHeader from '../components/HomeHeader';
import Categorays from '../components/Categorays';
import Slider from '../components/Slider';
import { Searchbar } from 'react-native-paper';

import { firebase } from '../Firebase/FirebaseConfig';
import Cardslider from '../components/Cardslider';

const HomeScreen = () => {
  const[foodData, setFoodData] = useState([]);
  const foodRef= firebase.firestore().collection("FoodData")

  useEffect(()=>{
    foodRef.onSnapshot(snapshot=>{
      setFoodData(snapshot.docs.map(doc=>doc.data()))
    })
  },[])
  useEffect(()=>{

  },[foodData])

  // console.log(foodData);
  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeader />
      <View style={styles.searchContainer}>
      <Searchbar
      inputStyle={{color:'#fff'}}
      selectionColor="#fff"
      iconColor='#ffffff'
      placeholder="Search"
      placeholderTextColor='#ffffff'
      
      style={styles.searchBar}
    />
      </View>
      <Categorays />
      <Slider />
      <Cardslider title={"Today's Special "} data={foodData}/>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#0c2c41',
    // alignItems: 'center',
    width:"100%",
  },
  searchContainer:{
width:"90%",
margin:20,

  },
  searchBar:{
    borderRadius:20,
    backgroundColor:"#1c6697",
    
    
  }
});
