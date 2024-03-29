import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  useColorScheme,
  Pressable,
} from "react-native";
import {
  useAppState,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export function Welcome({ navigation }: { navigation: any }) {
  const window = useWindowDimensions();
  const scheme = useColorScheme();
  const orientation = useDeviceOrientation();
  const state = useAppState();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/img/Image1.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />

        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.regularText}>View Menu</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "#F4CE14",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#F4CE14",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
