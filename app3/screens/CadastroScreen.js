import React, { useState, setState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";


import {
  Pressable,
  Vibration,
  ScrollView,
  PermissionsAndroid,
  Dimensions,
  SafeAreaView,
  Alert,
  TextInput,
  StyleSheet,
  View,
  AsyncStorage,
  Animated,
  AppState,
  Share,
  ToastAndroid
} from "react-native";

import {
  Divider,
  Input,
  Card,
  Dialog,
  Icon,
  Button,
  Text,
  Switch
} from "@rneui/base";
import HeaderPages from "../components/HeaderPages";


const CadastroScreen = ({ navigation }) => {
  

  return (
    <View>
      <HeaderPages title="Cadastro" />
      <View
        
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ScrollView>
            <Button
              title="Motoboy"
              onPress={() => navigation.navigate("Motoboy")}
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 50,
              }}
              type="solid"
            />

            <Button
              title="Cliente"
              onPress={() => navigation.navigate("Cliente")}
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
              }}
              containerStyle={{
                width: 200,
                paddingHorizontal: 20,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  view1:{
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          minHeight: "100%",
          paddingHorizontal: 20,
        },
  view2:{
  
            width: '100%',

            backgroundColor:'#000',
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            marginTop: 20,
          },
  debug: {
    fontSize: 11,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: "55%",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: "40%",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  container3: {
    height: "25%",
    width: "100%",
    alignItems: "center",
    alignContent: "space-between",
    color: "#fff",
    justifyContent: "space-between",
  },
  container4: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "100%",
    height: "75%",
  },
  error: {
    color: "red",
    fontSize: 11,
  },
  bg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
    top: 0,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttom: {
    padding: 15,
    fontSize: 20,
    color: "#000",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    marginTop: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 0,
  },
  input: {
    fontSize: 17,
    margin: 12,
    backgroundColor: "#C4C4C4",
    width: "60vw",
    padding: 15,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerWrapper: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginBottom: 30,
  },
});


export default CadastroScreen;