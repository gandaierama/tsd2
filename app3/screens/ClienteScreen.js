import React, { useState, setState, useEffect, useRef } from "react";
import {
  Pressable,
  Vibration,
  ScrollView,
  Image,
  PermissionsAndroid,
  Dimensions,
  SafeAreaView,
  Alert,
  TextInput,
  ImageBackground,
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
  ListItem,
  Header as HeaderRNE,
  HeaderProps,
  Icon,
  Button,
  Text,
  Switch
} from "@rneui/base";
import HeaderPages from "../components/HeaderPages";
import md5 from 'md5';

const ClienteScreen = ({ navigation }) => {
  const url = `http://api.tsdmotoboys.com.br/cliente`;

  const [sucesso, setSucesso] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState();
  const [error, setError] = useState("");

  async function submitCad(event) {
    event.preventDefault();
    Vibration.vibrate(2 * 1000);


    console.log(nome);

    const senha2= md5(senha);
    const valCad = JSON.stringify({
      name: nome,
      email: email,
      senha: senha2,
      cnpj: cnpj,
    });

    try {
      const requestOptions = {
        method: "POST",
        body: valCad,
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      };
      const response = await fetch(url, requestOptions).then((response) =>
        response.json()
      );

      setSucesso(true);
      const res = response;

      console.log(res);
      return res;
    } catch (e) {
      setError("error:"+e);
      console.log(e);
    }
  }

  return (
    <View>
      <HeaderPages title="Cadastro de Cliente v.1" />
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
        >
          {sucesso === false && (
            <>
              <Input
                onChangeText={setNome}
                placeholder="Digite seu nome"
                className={styles.input}
                name="nome"
                value={nome}
                style={{ width: "100%", marginTop: 70 }}
              />

              <Input
                onChangeText={setCnpj}
                name="cnpj"
                value={cnpj}
                placeholder="Digite seu cnpj"
                className={styles.input}
              />

              <Input
                placeholder="Digite seu email"
                name="email"
                value={email}
                onChangeText={setEmail}
                className={styles.input}
              />

              <Input
                placeholder="Digite sua senha"
                name="senha"
                value={senha}
                onChangeText={setSenha}
                className={styles.input}
              />

              <Button
                title="Cadastrar"
                onPress={submitCad}
                buttonStyle={{
                  backgroundColor: "rgba(78, 116, 289, 1)",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 30,
                }}
                type="solid"
              />
              <Text>{error}</Text>
            </>
          )}

          {sucesso === true && (
            <View>
          
              <Text>Cadastro efetuado com sucesso!!!</Text>

              <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
                buttonStyle={{
                  backgroundColor: "rgba(78, 116, 289, 1)",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 30,
                }}
                type="solid"
              />
            </View>
          )}
        </View>
      </ScrollView>
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

export default ClienteScreen;