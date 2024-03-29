import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from "react-native";

export function LoginScreen({ navigation }: { navigation: any }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const performLogin = () => {
    setLoggedIn(true);
    navigation.replace("Welcome");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {loggedIn ? (
        <Text style={styles.regularText}>You are logged in</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"email"}
            keyboardType={"email-address"}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={"password"}
            keyboardType={"default"}
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={performLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#EDEFEE",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F4CE14",
    padding: 10,
    margin: 12,
  },
  buttonText: {
    color: "#495E57",
    fontSize: 20,
  },
});
