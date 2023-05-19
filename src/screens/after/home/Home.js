import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserList from '../../../components/UserList';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <UserList/>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});