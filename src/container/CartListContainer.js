import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import CartList from "../components/CartList";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../redux/actions/userAction";

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
  //   {
  //     id: "4",
  //     name: "Venusaur",
  //   },
  //   {
  //     id: "5",
  //     name: "Python",
  //   },
  //   {
  //     id: "6",
  //     name: "CP",
  //   },
  //   {
  //     id: "7",
  //     name: "ReactJs",
  //   },
  //   {
  //     id: "8",
  //     name: "NodeJs",
  //   },
  //   {
  //     id: "9",
  //     name: "MongoDb",
  //   },
  //   {
  //     id: "10",
  //     name: "ExpressJs",
  //   },
  //   {
  //     id: "11",
  //     name: "PHP",
  //   },
  //   {
  //     id: "12",
  //     name: "MySql",
  //   },
];

const CartListContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.user);
  console.log(user, "user");
  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchApiData());
  }, []);
if (!user.data) {
  return <Text>Loading</Text>
}
  return (
    <View style={styles.container}>
      <FlatList
        data={user.data}
        renderItem={({ item }) => <CartList name={item.name} id={item.id} />}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default CartListContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
