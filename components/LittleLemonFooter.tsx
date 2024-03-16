import { View, Text, StyleSheet } from "react-native";

export const LittleLemonFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        All rights reserved by Little Lemon, 2024
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#F4CE14",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
  },
});
