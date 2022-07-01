import React, { useState, setState, useEffect, useRef } from "react";
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
  Animated,
  AppState,
  Share,
  Image,
  ImageBackground,
  ToastAndroid
} from "react-native";
import axios from "axios";
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

import AsyncStorage from '@react-native-async-storage/async-storage';

import md5 from 'md5';
const LoginScreen = ({ navigation }) => {


  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [checked, setChecked] = useState(false);
  const [valorLogin, setValorLogin] = useState("Cliente");
  const [sucesso, setSucesso] = useState(false);
  const [userNome, setUserNome] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [error, setError] = useState(null);
  const [urlLogin, setUrlLogin] = useState("http://api.tsdmotoboys.com.br/cliente/login");
  const toggleSwitch = () => {
    setChecked(!checked);
    if(checked===false){
      setValorLogin("Motoboy");
    }else{
      setValorLogin("Cliente");
    }
  };

  async function Login(event) {
     event.preventDefault();
    


    if (email === "" || email === undefined)
      setError("o e-mail precisa ser preenchida");
    if (senha === "" || senha === undefined)
      setError("a senha precisa ser preenchido");

    let senhaCrypto =md5(senha);
    console.log(senhaCrypto);
 
    if(checked===false){
        setUrlLogin("http://api.tsdmotoboys.com.br/cliente/login");
    }else{
        setUrlLogin("http://api.tsdmotoboys.com.br/motoboy/login");
    }

    try {


      const response = await axios.post(urlLogin, {
      email: email,
      senha: senhaCrypto,
    }, {
          "Content-Type": "application/json",
          "accept": "*/*",
        });

      
      console.log(response);

      const res = response.data;

      console.log(res);

      if(res.id){
        Vibration.vibrate(1 * 1000);
        setUserNome(res.name);
        setSucesso(true);
        return true;
      }

      return true;
    } catch (e) {
      console.log(e);
      setError(e.message);
    }

  
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
      } catch (e) {
        // saving error
      }
    }
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        // error reading value
      }
    }


  };


  return (
    <>

        <View style={{  height: 80, display:'block', overflow:'hidden' }}>

    

          <ScrollView>
   
            
   
          {sucesso === false && (
            <View>
            <View style={{width: "100%",alingContent:'center', flexDirection:'row', paddingVertical:10, alignItems:'center',fontSize:20}}>
              <View style={{flex:1,borderBottom: '1px solid #000'}}>
                <Text style={{fontSize:25, fontWeight: 'bold'}}>{valorLogin}</Text>
              </View>
              <View style={{flex:2}}>
                <Switch
                  value={checked}
                  containerStyle={{
                    width: 100
                  }}
                  onValueChange={toggleSwitch}
                />
              </View>
            </View>
            <View>
              <Input
                placeholder="Digite seu email"
                title="E-mail"
                className={styles.input}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Digite sua senha"
                title="Senha"
                className={styles.input}
                onChangeText={setSenha}
              />
              <Button
                title="Entrar"
                onPress={Login}
                buttonStyle={{
                  backgroundColor: "rgba(78, 116, 289, 1)",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                type="solid"
              />
      
              <Text>{error}</Text>
            </View>
             </View>
          )}
            {sucesso === true && (
            <>
    
              <Text>{`Bem vindo ${userNome} !`}</Text>
              <Button
                title="Acessar Painel"
                onPress={() => navigation.navigate("Painel")}
                buttonStyle={{
                  backgroundColor: "rgba(78, 116, 289, 1)",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                type="solid"
              />
            </>
          )}
          </ScrollView>
            </View>
          
    </>
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
            flex: 1,
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


export default LoginScreen;