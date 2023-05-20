import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react'

const UserCard = ({ id, name }) => {
  return (
    <View style={styles.container}>
<View>
                    <Text style={styles.id}>{`${"#00"}` + id}</Text>
                    <Text style={styles.name}>{name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <View style={styles.typeWrapper}>
                            <Text style={{ color: 'white' }}>Grass</Text>
                        </View>
                        <View style={styles.attackWrapper}>
                            <Text style={{ color: 'white' }}>Poison</Text>
                        </View>
                    </View>
                </View>
      {/* <Text>UserCard</Text> */}
      <View>
                    <TouchableOpacity style={{ height: 24, width: 24, left: 85, top: -10 }}>
                        <Image source={require("../assets/images/whiteHeart.png")} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <View style={{right: 10, bottom:18}}>
                        <Image source={require("../assets/images/bigBulbasaur.png")} style={{ height: 100, width: 100 }} />
                    </View>
                </View>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        height: 140,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#71CEB1",
        elevation: 8
    },
    id: {
        marginTop: 5,
        fontWeight: "500",
        color: 'gray'
    },
    name: {
        fontWeight: "500",
        fontSize: 24,
        color: "white"
    },
    typeWrapper: {
        width: 62,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF4D',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    attackWrapper: {
        width: 69,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF4D',
        alignItems: 'center',
        justifyContent: 'center',
    },

})