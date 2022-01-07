import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Vibration } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import AwesomeAlert from "react-native-awesome-alerts";
import { calculateWinner } from "../helper/helper";
import BoardComponent from "../components/BoardComponent";

const PlayerGameScreen = ({ navigation }) => {
    const [gameState, setGameState] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(true);
    const components = turn ? 1 : -1;
    const winner = calculateWinner(gameState);
    const stateText = winner ? "Winner " + winner : turn ? "Player X Turn" : "Player O Turn";
    const showAlert = !!(winner || !gameState.includes(null));

    const onTilePress = (i) => {
        var newState = gameState;

        if (newState[i] == null) {
            newState[i] = components;
            setTurn(!turn);
        };

        setGameState([...newState]);
        Vibration.vibrate(25);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#2f4f4f' }}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity style={{ paddingTop: 15, paddingRight: 5, }} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="md-close" size={50} color="#daa520" />
                </TouchableOpacity>
            </View>

            <View style={{ height: 125, alignItems: 'center' }}>
                <Text style={{ color: '#daa520', fontWeight: 'bold', fontSize: 50 }}>{stateText}</Text>
            </View>

            <BoardComponent squares={gameState} onPress={onTilePress} />

            <View style={{ alignItems: "center", paddingTop: 50 }}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { setGameState(Array(9).fill(null)); setTurn(true) }}>
                    <Ionicons name="reload" size={50} color="#1b1b1b" />
                </TouchableOpacity>
            </View>

            <AwesomeAlert
                cancelButtonStyle={styles.newGame}
                cancelButtonTextStyle={styles.newText}
                contentContainerStyle={styles.alert}
                show={showAlert}
                overlayStyle={{ backgroundColor: '#2f4f4f' }}
                title={winner ? `Winner is ${winner} !` : 'Match tied'}
                titleStyle={styles.title}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton
                cancelText="New Game"
                onCancelPressed={() => {
                    setGameState(Array(9).fill(null)); setTurn(true);
                }}
            ></AwesomeAlert>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#daa520",
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    alert: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f4f4f',
        flexDirection: 'column',
    },
    newGame: {
        height: 50,
        width: 150,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#daa520',
    },
    newText: {
        fontSize: 20,
        color: '#1b1b1b',
    },
    title: {
        fontSize: 45,
        color: '#daa520',
    },
});

export default PlayerGameScreen;