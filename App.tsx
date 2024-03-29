import { StyleSheet, View } from "react-native";
import { LittleLemonHeader } from "./components/LittleLemonHeader";
import { LittleLemonFooter } from "./components/LittleLemonFooter";
import { Welcome } from "./components/Welcome";
import { MenuItems } from "./components/MenuItems";
import FeebackForm from "./components/FeebackForm";
import { LoginScreen } from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StrictMode } from "react";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <StrictMode>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Login"}
          screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
        >
          <Stack.Screen name={"Login"} component={LoginScreen} />
          <Stack.Screen
            name={"Welcome"}
            component={Welcome}
            options={{ headerTitle: "Home" }}
          />
          <Stack.Screen name={"Menu"} component={MenuItems} />
          <Stack.Screen name={"FeedbackForm"} component={FeebackForm} />
        </Stack.Navigator>
        {/*<View style={styles.container}>*/}
        {/*    <View style={styles.header}>*/}
        {/*      <LittleLemonHeader />*/}
        {/*    </View>*/}
        {/*    <View style={styles.welcome}>*/}
        {/*      /!*<Welcome />*!/*/}
        {/*    /!*<MenuItems />*!/*/}
        {/*    /!*<FeebackForm />*!/*/}
        {/*    /!*<LoginScreen />*!/*/}
        {/*    </View>*/}
        {/*  <View style={styles.footer}>/!*<LittleLemonFooter />*!/</View>*/}
        {/*</View>*/}
      </NavigationContainer>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
    alignItems: "center",
  },
  header: {
    flex: 0.12,
    backgroundColor: "#F4CE14",
    justifyContent: "flex-end",
    width: "100%",
  },
  welcome: {
    marginTop: 16,
    flex: 0.9,
    width: "100%",
  },
  footer: {
    backgroundColor: "#F4CE14",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 16,
    width: "100%",
  },
});
