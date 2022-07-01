import React, {useState, setState} from "react";
import {Image, ImageBackground, View, StyleSheet } from 'react-native';
const HeaderHome = () => {
  return(
          <View style={{  height: '45%' }}>
          <ImageBackground source={require('../../assets/tsd.png')} resizeMode="cover" style={styles.bg} imageStyle={{
    resizeMode: "cover",
    height: '120%', // the image height
    width: '100%',
    left:0,
    top: undefined
  }}>
      <View style={{  justifyContent: "center", alignItems: "center" , height: '50%' }}>
       <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 150 }}/>

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
export default HeaderHome;