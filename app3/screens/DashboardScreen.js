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


const DashboardScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [visible1, setVisible1] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  const [region, setRegion] = useState(null);
  const [regionInitial, setRegionInitial] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [text2, setText2] = useState(null);
  const [open, setOpen] = useState(null);
  const [text, setText] = useState(null);
  const [seconds, setSeconds] = useState();
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState(Date.now());
  const [time2, setTime2] = useState(Date.now());
  const [counter, setCounter] = useState(0);
  const [distance, setDistance] = useState(0);
  let markers = [];
  let numberVar = 0;


  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  function getDistanceFromLatLonInKm(position1, position2) {
      "use strict";
      var deg2rad = function (deg) { return deg * (Math.PI / 180); },
          R = 6371,
          dLat = deg2rad(position2.lat - position1.lat),
          dLng = deg2rad(position2.lng - position1.lng),
          a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
              + Math.cos(deg2rad(position1.lat))
              * Math.cos(deg2rad(position1.lat))
              * Math.sin(dLng / 2) * Math.sin(dLng / 2),
          c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return ((R * c *1000).toFixed());
  }

  const getInitialState = () => {
    return {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  };

  const getCliente = {
      latitude: -23.558084020674258,
      longitude: -46.64171602578789
  };

  const onRegionChange = (region) => {
    setRegion({ region });
  };

  const regionFrom = (lat, lon, accuracy) => {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;
    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = accuracy / oneDegreeOfLongitudeInMeters;

    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta: Math.max(0, latDelta),
      longitudeDelta: Math.max(0, lonDelta),
    };
  };

  const sendLocation =async(location) =>{
    const url = `http://api.tsdmotoboys.com.br/track`;
    const valCad = JSON.stringify({
      id_motoboy: 1,
      id_cliente: 1,
      id_entrega: 1,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
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
      setText("enviado");
      return true;

      } catch (e) {
        setErrorMsg("error: "+e);
        console.log(e);
      }
  }

  const mudar = async () => {
    setText("coletando");
    setTime2(Date.now());

    var date = new Date(0);
    date.setSeconds((Date.now() - time)/ 1000);
    var timeString = date.toISOString().substr(11, 8);

    setSeconds(timeString) ;
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location1 = await Location.getCurrentPositionAsync({});
    let lat = location1.coords.latitude;
    let lon = location1.coords.longitude;
    let accuracy = location1.coords.accuracy;
    var distanciaKm = (getDistanceFromLatLonInKm(
       {lat: lat, lng: lon},
       {lat: getCliente.latitude,lng: getCliente.longitude}

    ));
    var km = distanciaKm / 1000;
    setDistance(km);
    sendLocation(location1);

    markers.push({ latitude: lat, longitude: lon });
    console.log(markers);
    let reg = regionFrom(Number(lat), Number(lon), accuracy);
    if(regionInitial===null){
      setRegionInitial(reg);
    }
    setRegion(reg);

  };

  useEffect(() => {
    const interval = setInterval(() => mudar(), 10000);
    console.log(region);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let locationS = JSON.stringify(location);

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
        title="Finalizar"
        titleStyle={{ fontSize: 11 }}
        icon={{ name: 'paper-plane-outline', type: 'ionicon', color: 'white' }}
      />

    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ width: '100%' }}>
        <View style={{ height: "100%" }}>
        <View style={styles.container}>
          {region != null && (
            <MapView
              style={styles.map}
              region={region}
              initialRegion={regionInitial}
              zoomEnabled={false}
              zoomTapEnabled={false}
              zoomControlEnabled={false}
              maxZoomLevel={18}
              onRegionChange={onRegionChange}
            > 
              <MapView.Marker
                coordinate={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}
                key={1}
                icon={require("../assets/icon2.png")}
                title={"TSD"}
                description={"Motoboy: Daniel Batista"}
              />
              <MapView.Marker coordinate = {{latitude: getCliente.latitude,longitude: getCliente.longitude}}
         pinColor = {"purple"} // any color
         title={"title"}
         description={"description"}/>

         <Polyline
        coordinates={[{latitude: getCliente.latitude,longitude: getCliente.longitude}, {
                  latitude: region.latitude,
                  longitude: region.longitude,
                }]}
        strokeColor={"#000"}
        strokeWidth={4}
        lineDashPattern={[0]}
      />

            </MapView>
          )}
        </View>
      </View>
      </TabView.Item>

      <TabView.Item style={{ marginTop: 10, height:'100%', width: '100%', flexDirection:'row', alingContent:'center', justifyContent: 'center' }}>
        <Card containerStyle={{ marginTop: 30,  flex:1}}>
          <Card.Title>Finalizar entrega</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts}>Cliente: Padaria dona maria</Text>
          <Card.Divider />
          <Text style={styles.fonts} h5>
           Orden: XXXXX-XXXXX
          </Text>
          <Text style={styles.fonts} h5>
           Entrega: 0000-0000
          </Text>
          <Text style={styles.fonts} h5>
           Tempo: {seconds}
          </Text>
          <Text style={styles.fonts} h5>
           Distancia: {distance}Km
          </Text>
          <Card.Divider />
          <Text style={styles.fonts}>Confira os dados antes de finalizar</Text>
          <Button 
            title="Confirmar Finalização"
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
            }}
            containerStyle={{
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            type="solid"
          onPress={() => takePicture()}
           />
        </Card>
      </TabView.Item>
    </TabView>
      

      
      <View style={styles.bottom}>
            <Text style={styles.white}>{seconds} | {distance}Km</Text>

              <Text style={styles.white2}>{errorMsg}{text}</Text>
      </View>
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
export default DashboardScreen;
