import React, { useState, setState, useEffect } from "react";
import { StyleSheet, Text, View ,TouchableOpacity, Platform, Image } from 'react-native';
import { Camera } from 'expo-camera';

import {
  Divider,
  Button
} from "@rneui/base";

const FotoScreen = ({ navigation }) => {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }
 
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  useEffect(() => {
    (async () => {
        const cameraStatus = await Camera.requestPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);


return (
  <>

  <View>
  <Button
        title="Trocar Camera"
         buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
            }}
            containerStyle={{
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            type="solid"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}>
    </Button>
   <Button 
      title="Tirar Foto"
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
   </View>
   <View style={{ flex: 1}}>
      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'} />
      </View>
      
        {image && <Image source={{uri: image}} style={{flex:1}}/>}
   </View>
   </>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      flexDirection: 'row'
  },
  fixedRatio:{
      flex: 1,
      aspectRatio: 1
  }
})
export default FotoScreen;