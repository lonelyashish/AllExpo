import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import UserCard from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import {  fetchApiData } from "../redux/actions/userAction";
import { addToCart } from "../redux/actions/cartActions";

const UserCardContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAddToCart = () => {
    console.log("handleAddToCart")
    dispatch(addToCart());
  };

  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchApiData());
  }, []);
  if (!user.data) {
    return <Text>Loading</Text>;
  }
  const renderItem = ({ item }) => (
    <UserCard
     onPress={handleAddToCart}
      id={item.id}
      first_name={item.first_name}
      last_name={item.last_name}
      email={item.email}
      imageUrl={item.avatar}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={user.data.data}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id}
        // onEndReached={fetchApiData} // Trigger fetchData when reaching the end of the list
        // onEndReachedThreshold={0.5} // Specify the threshold for triggering onEndReached
      />
    </View>
  );
};

export default UserCardContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    paddingBottom: 150,
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
