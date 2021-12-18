import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SquareComponent from "../components/SquareComponent";
import BoardComponent from "../components/BoardComponent";

const GameScreen = (props) => {
    const [gameState, setGameState] = useState([Array(9).fill(null)]);
    const [turn, setTurn] = useState(true);
    const components = turn ? <Ionicons name="close-outline" size={65} color="#dc143c"/> : <Ionicons name="ellipse-outline" size={65} color="#228b22"/>

    const onTilePress = (i) => {
        var newState = gameState;
        var value = newState[i];

        newState[i] = components;
        console.log(newState);
        console.log(value);

        setGameState(newState);
        setTurn(!turn);
    }

    return (
        <View style = {{flex: 1, backgroundColor: '#2f4f4f'}}>
            <View style = {{flexDirection: 'row-reverse'}}>
                <TouchableOpacity style = {{paddingTop: 15}} onPress={() => props.navigation.navigate('Home')}>
                    <Ionicons name="md-close" size={50} color="#daa520" />
                </TouchableOpacity>
            </View>

            <View style = {{height: 125, alignItems: 'center'}}>
                <Text style = {{color: '#daa520', fontWeight: 'bold', fontSize: 50}}>Player X Turn</Text>
            </View>

            <BoardComponent squares = {gameState} onPress = {onTilePress}/>

        </View>
    );
};

const styles = StyleSheet.create({});

export default GameScreen;