import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = () => {
    return (
        <View style = {{backgroundColor: '#2f4f4f', flex: 1}}>
            <View style = {{width: 20, height: 75}}/>
            <View style = {styles.textView}>
                <Text style = {styles.textStyle}>TicTacToe</Text>
            </View>
            <View style = {{width: 20, height: 300}}/>
            <View style = {styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.text}>One Player</Text>
                </TouchableOpacity>
                <View style = {{width: 20, height: 20}}/>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.text}>Two Player</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        color: '#daa520',
        fontWeight: 'bold',
        fontSize: 50,
    },
    textView: {
        alignItems: 'center',
    },
    buttonView: {
        alignItems: 'center',
    },
    buttonStyle: {
        elevation: 8,
        backgroundColor: "#daa520",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
});

export default HomeScreen;