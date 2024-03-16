import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {LittleLemonHeader} from "./components/LittleLemonHeader";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LittleLemonHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
