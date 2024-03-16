import { StyleSheet, Text, View } from "react-native";

export const LittleLemonHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    alignSelf: "center",
  },
});
