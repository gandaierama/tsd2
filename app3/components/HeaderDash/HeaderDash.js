
import React, {useState, setState} from "react";
import {Image, ImageBackground, View, Text, StyleSheet } from 'react-native';
import {Divider, Button} from 'react-native-elements';
const HeaderPages = ({title}) => {
  return(
    <View style={{  height: '23%' }}>
          <View style={styles.bg} >
      <View style={{  flexDirection:'row', alignItems: "center" , height: '50%' }}>
       <Image source={require('../../assets/logo.png')} style={{ width: 70, height: 70, marginLeft: 20, marginRight: 20 }}/>

       <Button
                title="Jobs"
          
                buttonStyle={{
                  backgroundColor: 'rgba(78, 116, 289, 1)'
                }}
                containerStyle={{
                  width:100,
                  height:40,
                  marginHorizontal: 10,
                  marginVertical: 30,
                }}
                type="solid"
              />
        <Button
                title="Resumo"
          
                buttonStyle={{
                  backgroundColor: 'rgba(78, 116, 289, 1)'
                }}
                containerStyle={{
                  width:100,
                  height:40,
                  marginHorizontal: 10,
                  marginVertical: 30
                }}
                type="solid"
              />

      </View>
                  <View style={{  marginTop: 20, height:3, backgroundColor: 'rgba(78, 116, 289, 1)', width: '100%'  }}>
                <Divider />

      </View>
    </View >  

    </View>
    )
}

const styles = StyleSheet.create({

  bg: {
    height:'100%',
    justifyContent: "center",
    width: '100%',
    backgroundColor:'#fff',

    top: 0,
  },

});
export default HeaderPages;