import { View, Text, StyleSheet, FlatList } from "react-native";

const menuItemsToDisplay = [
  { name: "Hummus", price: "$5.00", id: "1A" },
  { name: "Moutabal", price: "$5.00", id: "2B" },
  { name: "Falafel", price: "$7.50", id: "3C" },
  { name: "Marinated Olives", price: "$5.00", id: "4D" },
  { name: "Kofta", price: "$5.00", id: "5E" },
  { name: "Eggplant Salad", price: "$8.50", id: "6F" },
  { name: "Lentil Burger", price: "$10.00", id: "7G" },
  { name: "Smoked Salmon", price: "$14.00", id: "8H" },
  { name: "Kofta Burger", price: "$11.00", id: "9I" },
  { name: "Turkish Kebab", price: "$15.50", id: "10J" },
  { name: "Fries", price: "$3.00", id: "11K" },
  { name: "Buttered Rice", price: "$3.00", id: "12L" },
  { name: "Bread Sticks", price: "$3.00", id: "13M" },
  { name: "Pita Pocket", price: "$3.00", id: "14N" },
  { name: "Lentil Soup", price: "$3.75", id: "15O" },
  { name: "Greek Salad", price: "$6.00", id: "16Q" },
  { name: "Rice Pilaf", price: "$4.00", id: "17R" },
  { name: "Baklava", price: "$3.00", id: "18S" },
  { name: "Tartufo", price: "$3.00", id: "19T" },
  { name: "Tiramisu", price: "$5.00", id: "20U" },
  { name: "Panna Cotta", price: "$5.00", id: "21V" },
];

const Separator = () => <View style={styles.separator} />;

const Header = () => <Text style={styles.headerText}>View Menu</Text>;

const Footer = () => (
  <Text style={styles.footerText}>
    All Rights Reserved by Little Lemon, 2024
  </Text>
);

export const MenuItems = () => {
  const renderItem = ({ item }: { item: { name: String; price: String } }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },
  footerText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  flatList: {
    width: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  item: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginTop: 16,
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
    marginLeft: 16,
    backgroundColor: "white",
  },
});
