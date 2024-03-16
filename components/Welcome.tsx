import { StyleSheet, Text } from "react-native";

export const Welcome = () => {
  return <Text style={styles.text}>Welcome to Little Lemon!</Text>;
};

const styles = StyleSheet.create({
  text: {
    // color: "#F4CE14",
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginTop: 16,
  },
});
