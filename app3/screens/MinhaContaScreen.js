import React, { useState, setState, useEffect } from "react";
import HeaderPages from "../components/HeaderPages";
import * as Location from "expo-location";
import MapView, { Marker, Polyline } from "react-native-maps";

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
  ToastAndroid,
  ImageBackground,
} from "react-native";

import {
  Divider,
  Dialog,
  Input,
  Tab,
  TabView,
  Card,
  ListItem,
  Image,
  Icon,
  Button,
  Text,
  ButtonGroup,
  Switch,
} from "@rneui/base";


import Speed from "../components/Speed";

const ResumoScreen = ({ navigation }) => {

      const date = new Date();
    const timeString = date.toISOString();

  const [index, setIndex] = React.useState(0);
  const [visible1, setVisible1] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [open, setOpen] = useState(null);
  const [text, setText] = useState(null);
  const [seconds, setSeconds] = useState();
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState(timeString);

  const CustomTitle = () => {
return (
  <View style={{ flexDirection: 'column' }}>
    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
    <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
      Minister of Magic
    </Text>
  </View>
);
};
    

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  useEffect(() => {
    const date = new Date(0);
    const timeString = date.toISOString().substr(11, 8);

    return () => {
      setTime(timeString);
    };
  }, []);

  return (
    <>
      <Dialog
        isVisible={visible1}
        onBackdropPress={toggleDialog1}
      >
        <Dialog.Title title="Dialog Title"/>
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>


      <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item disableIndicator={true}>
        <Image
              source={require("../assets/logo.png")}
              style={{ width: 50, height: 50 }}
            />
      </Tab.Item>

      <Tab.Item
        title="Informações gerais"
        titleStyle={{ fontSize: 11 }}
        icon={{ name: 'sports-motorsports', type: 'material-icons', color: 'white' }}
      />

      <Tab.Item
        title="Saldo"
        titleStyle={{ fontSize: 11 }}
        icon={{ name: 'motorcycle', type: 'font-awesome', color: 'white' }}
      />

    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
<TabView.Item style={{ marginTop: 10, height:'100%', width: '100%', flexDirection:'row', alingContent:'center', justifyContent: 'center' }}>
        

        <Card containerStyle={{ marginTop: 30,  flex:1}}>
          <Card.Title>Seu Resumo</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts}>Nesta parte vocë encontra </Text>
          <Button
              title={<CustomTitle />}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />


            <Button
              title={<CustomTitle />}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />

            <Button
              title={<CustomTitle />}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
        </Card>
        
      </TabView.Item>

      <TabView.Item style={{ marginTop: 10, height:'100%', width: '100%', flexDirection:'row', alingContent:'center', justifyContent: 'center' }}>
        

        <Card containerStyle={{ marginTop: 30,  flex:1}}>
          <Card.Title>Titulo</Card.Title>

          <Card.Divider />
          
          <Text style={styles.fonts} h5>

          </Text>

        </Card>
        
      </TabView.Item>


      <TabView.Item style={{ marginTop: 10, height:'100%', width: '100%', flexDirection:'row', alingContent:'center', justifyContent: 'center' }}>
        

        <Card containerStyle={{ marginTop: 30,  flex:1}}>
          <Card.Title>Titulo</Card.Title>

          <Card.Divider />
          
          <Text style={styles.fonts} h5>

          </Text>

        </Card>
        
      </TabView.Item>

    </TabView>
      

      
      <View style={styles.bottom}>
            <Text style={styles.white}>{time}</Text>

              <Text style={styles.white2}>{errorMsg}{text}</Text>
      </View>
      <Speed navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    marginTop: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  fonts:{
    textAlign:'center'
  },
    bg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
    top: 0,
  },
  white:{
    color: '#fff',
    textAlign: 'center'
  },
  white2:{
    color: '#fff',
    fontSize: 7,
    textAlign: 'center'


  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left:0,
    right:0,
    padding:5,
    textAlign: 'center',
    backgroundColor:"#397af8",
    color: '#fff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 0,
  },
});
export default ResumoScreen;
