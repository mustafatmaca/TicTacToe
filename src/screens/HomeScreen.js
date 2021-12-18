import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = (props) => {
    return (
        <View style = {{backgroundColor: '#2f4f4f', flex: 1}}>

            <View style = {styles.textView}>
                <Text style = {styles.textStyle}>TicTacToe</Text>
            </View>

            <View style = {styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Game')}>
                    <Ionicons name="md-person" size={25} color="#fff" />
                    <Text style={styles.text}>One Player</Text>
                </TouchableOpacity>

                <View style = {{height: 20}}/>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Game')}>
                    <Ionicons name="md-people" size={28} color="#fff" />
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
        paddingTop: 75
    },
    buttonView: {
        alignItems: 'center',
        paddingTop: 300
    },
    buttonStyle: {
        elevation: 8,
        backgroundColor: "#daa520",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200,
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        paddingHorizontal: 10
      },
});

export default HomeScreen;