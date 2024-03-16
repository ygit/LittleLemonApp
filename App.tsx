import { StyleSheet, View } from "react-native";
import { LittleLemonHeader } from "./components/LittleLemonHeader";
import { LittleLemonFooter } from "./components/LittleLemonFooter";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LittleLemonHeader />
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter />
      </View>
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
    flex: 0.15,
    backgroundColor: "#F4CE14",
    alignItems: "center",
    justifyContent: "center",
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
