import { StyleSheet, View } from "react-native";
import { LittleLemonHeader } from "./components/LittleLemonHeader";
import { LittleLemonFooter } from "./components/LittleLemonFooter";
import { Welcome } from "./components/Welcome";
import { MenuItems } from "./components/MenuItems";
import FeebackForm from "./components/FeebackForm";
import { LoginScreen } from "./components/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LittleLemonHeader />
      </View>
      <View style={styles.welcome}>
        {/*<Welcome />*/}
        {/*<MenuItems />*/}
        {/*<FeebackForm />*/}
        <LoginScreen />
      </View>
      <View style={styles.footer}>{/*<LittleLemonFooter />*/}</View>
    </View>
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
