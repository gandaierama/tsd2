
import React, {useState, setState} from "react";
import {Image, ImageBackground, View, Text, StyleSheet } from 'react-native';
const HeaderPages = ({title}) => {
  return(
    <View style={{  height: 80, display:'block', overflow:'hidden' }}>
          <ImageBackground source={require('../../assets/tsd.png')} resizeMode="cover" style={styles.bg} imageStyle={{
    resizeMode: "cover",
    width: '100%',
    paddingHorizontal: 10,
    left:0,
    top: undefined
  }}>
      <View style={{  flexDirection:'row', alignItems: "center"  }}>
       <Image source={require('../../assets/logo.png')} style={{ width: 50, height: 50, marginLeft: 20 }}/>
       <Text style={{  color: '#fff', fontSize: 18, marginLeft: 20 }}>{title}</Text>
      </View>
    </ImageBackground >  
    </View>
    )
}

const styles = StyleSheet.create({

  bg: {
    height:'100%',
    justifyContent: "center",
    width: '100%',
    top: 0,
  },

});
export default HeaderPages;