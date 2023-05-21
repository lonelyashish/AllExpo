import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import CartList from "../components/CartList";
import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

const CartListContainer = ({ item }) => {

  // const handleRemoveFromCart = () => {
  //   dispatch(removeFromCart(item.id));
  // };

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems,"cartItems")
 
if (!cartItems) {
  return <Text>Loading......</Text>
}
  return (
    <View style={styles.container}>
      <FlatList
        data={[cartItems]}
        renderItem={({ item }) => <CartList  id={item.id} />}
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
