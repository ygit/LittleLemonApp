import { View, Text, StyleSheet, SectionList } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

type ItemProps = { item: { name: String; price: String } };
const Item = ({ item }: ItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.price}</Text>
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

const Footer = () => (
  <Text style={styles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

export const MenuItems = () => {
  const renderItem = ({ item }: ItemProps) => <Item item={item} />;

  type SectionProps = {
    section: { title: String; data: Array<{ name: String; price: String }> };
  };
  const renderSectionHeader = ({ section }: SectionProps) => {
    console.log("section", section);
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        SectionSeparatorComponent={Separator}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Footer}
      />
    </View>
  );
};

// Add styles to the component
const styles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 24,
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#EDEFEE",
    marginLeft: 8,
  },
  footerText: {
    color: "#000",
    backgroundColor: "lightsalmon",
    fontSize: 16,
    flexWrap: "wrap",
    textAlign: "center",
    padding: 8,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
});
