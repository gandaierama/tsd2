import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, setState, useEffect, useRef } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";


const Stack = createNativeStackNavigator();
const baseUrl = "http://api.tsdmotoboys.com.br/";
const Key = "Tsd@M07080y";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import MotoboyScreen from "./screens/MotoboyScreen";
import ClienteScreen from "./screens/ClienteScreen";
import DashboardScreen from "./screens/DashboardScreen";
import EntregaScreen from "./screens/EntregaScreen";
import DashboardClienteScreen from "./screens/DashboardClienteScreen";
import FotoScreen from "./screens/FotoScreen";
import OrdenScreen from "./screens/OrdenScreen";
import ResumoScreen from "./screens/ResumoScreen";


function App({ navigation }) {

const [base, setBase] = useState(null);



    

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {/*Páginas públicas*/}
        <Stack.Screen name="Homev2" title="WELCOME" component={HomeScreen} />
        <Stack.Screen name="Cadastro" title="CADASTRO" component={CadastroScreen} />
        <Stack.Screen name="Cliente" title="Cliente" component={ClienteScreen} />
        <Stack.Screen name="Login" title="Login" component={LoginScreen} />
        <Stack.Screen name="Motoboy" title="MOTOBOY" component={MotoboyScreen} />
        <Stack.Screen name="Painel" title="Painel" component={DashboardScreen} />
        <Stack.Screen name="Foto" title="Foto" component={FotoScreen} />
        <Stack.Screen name="Orden" title="Ordens" component={OrdenScreen} />
        <Stack.Screen name="Entrega" title="Entrega" component={EntregaScreen} />
        <Stack.Screen name="Resumo" title="Resumo" component={ResumoScreen} />


       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;