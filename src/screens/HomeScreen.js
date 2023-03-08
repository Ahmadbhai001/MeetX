import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Categorays from '../components/Categorays';
import Slider from '../components/Slider';
import { Searchbar } from 'react-native-paper';

const HomeScreen = () => {
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
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#0c2c41',
    alignItems: 'center',
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
