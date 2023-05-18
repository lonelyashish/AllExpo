
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';


const CustomButton = (props) => {
    const { onPress, title, backgroundColor, color } = props;
    return (
        <>
            <TouchableOpacity onPress={onPress} style={{
                backgroundColor: backgroundColor,
                width: "100%",
                height: 50,
                borderRadius: 50,
                marginTop: 35,
                justifyContent: "center",
                alignItems: "center"

            }}>
                <Text style={{
                    color: color,
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center"
                }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default CustomButton;

const styles = StyleSheet.create({});