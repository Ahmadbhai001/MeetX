import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Cardslider = ({title, data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardoutheader}>{title}</Text>
      <FlatList
        // horizontal
        style={styles.cardout}
        data={data}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.s1}>
              <Image
                source={{
                  uri: item.foodImageUrl,
                }}
                style={styles.cardimigin}
              />
            </View>
            <View style={styles.s2}>
              <Text style={styles.text1}>{item.foodName}</Text>
              <View style={styles.s2in}>
                <Text style={styles.text2}>Rs.{item.foodPrice}</Text>
              </View>
            </View>
            <View style={styles.s3}>
            <Text style={styles.bayBtn}>
            Buy
            </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Cardslider;

const styles = StyleSheet.create({
  container: {
    //   marginVertical:20,
    // justifyContent:"center",
     alignItems:"center",
    // justifyContent:"center",
    alignSelf:"center"
  },
  cardoutheader: {
    color: '#ffffff',
    width: '90%',
    fontSize: 30,
    fontWeight: '300',
    borderRadius: 10,
     marginHorizontal: 10,
  },
  cardout: {
    width: '100%',
  },
  card: {
     width: 350,
     height: 250,
    margin: 10,
    borderRadius: 10,
    borderWidth: 5,
    // borderColor: 'white',
    // backgroundColor: 'Yellow',
  },
  cardimigin: {
    width: '100%',
     height: 170,
    borderRadius: 10,
  },
  s2:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
  },
  text1:{
    fontSize:18,
     color:"white",
    marginHorizontal:5,
    width:150,
  },
  text2:{
    fontSize:20,
     color:"white",
    marginHorizontal:10,
    
  },
  s2in:{
    flexDirection:"row",
    alignItems:"center",
     marginHorizontal:10,
  },
  s3:{
    alignItems:"center",
    // position:"absolute",
    // bottom:1,
    width:"100%",
  },
  bayBtn:{
    backgroundColor:"#ffffff",
    color:'#0c2c41',
     paddingHorizontal:10,
     paddingVertical:5,
    fontSize:20,
    borderRadius:10,
    width:'90%',
    textAlign:"center"
  }

});
