import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";

const DATA = [
  {
    id: "1",
    name: "Bulbasaur",
  },
  {
    id: "2",
    name: "Ivysaur",
  },
  {
    id: "3",
    name: "Venusaur",
  },
  {
    id: "4",
    name: "Venusaur",
  },
  {
    id: "5",
    name: "Python",
  },
  {
    id: "6",
    name: "CP",
  },
  {
    id: "7",
    name: "ReactJs",
  },
  {
    id: "8",
    name: "NodeJs",
  },
  {
    id: "9",
    name: "MongoDb",
  },
  {
    id: "10",
    name: "ExpressJs",
  },
  {
    id: "11",
    name: "PHP",
  },
  {
    id: "12",
    name: "MySql",
  },
];

const UserCardContainer = () => {
  const renderItem = ({ item }) => <UserCard name={item.name} id={item.id} />;
  return (
    <View style={styles.container}>
      {/* <Text>UserList</Text> */}

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default UserCardContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom:10
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
