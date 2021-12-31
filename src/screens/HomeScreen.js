import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = (props) => {
    return (
        <View style={{ backgroundColor: '#2f4f4f', flex: 1 }}>
            <View style={styles.titleView}>
                <Text style={styles.titleStyle}>TicTacToe</Text>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Computer')}>
                    <Ionicons name="md-person" size={25} color="#1b1b1b" />
                    <Text style={styles.buttonText}>One Player</Text>
                </TouchableOpacity>

                <View style={{ height: 20 }} />

                <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Player')}>
                    <Ionicons name="md-people" size={28} color="#1b1b1b" />
                    <Text style={styles.buttonText}>Two Player</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: '#daa520',
        fontWeight: 'bold',
        fontSize: 50,
    },
    titleView: {
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
    buttonText: {
        fontSize: 18,
        color: "#1b1b1b",
        fontWeight: "bold",
        alignSelf: "center",
        paddingHorizontal: 10
    },
});

export default HomeScreen;