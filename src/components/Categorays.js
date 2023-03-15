import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Categorays = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categorays</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={30}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={30}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Pizza</Text>
        </View>
        <View style={styles.box}>
          <Entypo name="drink" size={30} color="#ffffff" style={styles.icon} />
          <Text style={styles.iconText}>Drink</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="french-fries"
            size={35}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Fries</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="pasta"
            size={30}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Pasta</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="cake"
            size={30}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Cake</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categorays;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c6697',
    width: '100%',
    elevation: 10,
    borderRadius: 10,
  },
  head: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  box: {
    //  backgroundColor:"#ffffff",
    elevation: 10,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});
