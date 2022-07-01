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
} from "react-native-elements";
import HeaderPages from "../components/HeaderPages";


const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderPages title="Login" />
      <View
        className={styles.view1}
      >
        <View
          className={styles.view2}
        >
          <ScrollView>
            
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default LoginScreen;