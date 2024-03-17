import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

const menuItemsToDisplay = [
  { name: "Hummus", id: "1A" },
  { name: "Moutabal", id: "2B" },
  { name: "Falafel", id: "3C" },
  { name: "Marinated Olives", id: "4D" },
  { name: "Kofta", id: "5E" },
  { name: "Eggplant Salad", id: "6F" },
  { name: "Lentil Burger", id: "7G" },
  { name: "Smoked Salmon", id: "8H" },
  { name: "Kofta Burger", id: "9I" },
  { name: "Turkish Kebab", id: "10J" },
  { name: "Fries", id: "11K" },
  { name: "Buttered Rice", id: "12L" },
  { name: "Bread Sticks", id: "13M" },
  { name: "Pita Pocket", id: "14N" },
  { name: "Lentil Soup", id: "15O" },
  { name: "Greek Salad", id: "16Q" },
  { name: "Rice Pilaf", id: "17R" },
  { name: "Baklava", id: "18S" },
  { name: "Tartufo", id: "19T" },
  { name: "Tartufo", id: "20U" },
  { name: "Tiramisu", id: "21V" },
  { name: "Panna Cotta", id: "22W" },
];
export const MenuItems = () => {
  const renderItem = ({ item }) => {
    return <Text style={styles.item}>{item.name}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu Items</Text>
      <FlatList data={menuItemsToDisplay} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    marginTop: 16,
  },
  scrollView: {
    width: "100%",
  },
  item: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginTop: 16,
  },
});
