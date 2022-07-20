
import React, {useState, setState} from "react";
import { SpeedDial } from '@rneui/base';
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
const Speed =({navigation}) => {
const [open, setOpen] = React.useState(false);


const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'TSD Motoboys | O aplicativo para administrar suas entregas de delivery. Baixe Agora!!! tsdmotoboys.com.br',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

return (
  <SpeedDial
    isOpen={open}
    icon={{ name: 'add', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
  >
{/*    <SpeedDial.Action
      icon={{ name: 'groups', color: '#fff' }}
      title="Login"
      onPress={() => navigation.navigate('Login')}
    />
    <SpeedDial.Action
      icon={{ name: 'electric-moped', color: '#fff' }}
      title="Cadastrar Motoboy"
      onPress={() => navigation.navigate('Motoboy')}
    />
    <SpeedDial.Action
      icon={{ name: 'hail', color: '#fff' }}
      title="Cadastrar Cliente"
      onPress={() => navigation.navigate('Cliente')}
    />*/}
    <SpeedDial.Action
      icon={{ name: 'hail', color: '#fff' }}
      title="Resumo"
      onPress={() => navigation.navigate('Resumo')}
    />
    <SpeedDial.Action
      icon={{ name: 'hail', color: '#fff' }}
      title="Minha Conta"
      onPress={() => navigation.navigate('Perfil')}
    />
    <SpeedDial.Action
      icon={{ name: 'hail', color: '#fff' }}
      title="Entregas"
      onPress={() => navigation.navigate('Entrega')}
    />
    <SpeedDial.Action
      icon={{ name: 'hail', color: '#fff' }}
      title="Ordens"
      onPress={() => navigation.navigate('Orden')}
    />
    <SpeedDial.Action
      icon={{ name: 'hail', color: '#fff' }}
      title="Foto"
      onPress={() => navigation.navigate('Foto')}
    />
    <SpeedDial.Action
      icon={{ name: 'hail', color: '#fff' }}
      title="Painel"
      onPress={() => navigation.navigate('Painel')}
    />
{/*    <SpeedDial.Action
      icon={{ name: 'share', color: '#fff' }}
      title="Compartilhar"
      onPress={onShare}
    />*/}
  </SpeedDial>
);
};

export default Speed;