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
} from "react-native-elements";
import HeaderPages from "../components/HeaderPages";


const CadastroScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderPages title="Cliente" />
      <View
        className={styles.view1}
      >
        <View
          className={styles.view2}
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
                marginVertical: 30,
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

export default CadastroScreen;