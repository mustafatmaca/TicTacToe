import React from "react";
import { View, StyleSheet } from "react-native";
import SquareComponent from "./SquareComponent";

const BoardComponent = ({ squares, onPress }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <SquareComponent value={squares[0]} onPress={() => onPress(0)} />
                <SquareComponent value={squares[1]} onPress={() => onPress(1)} />
                <SquareComponent value={squares[2]} onPress={() => onPress(2)} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <SquareComponent value={squares[3]} onPress={() => onPress(3)} />
                <SquareComponent value={squares[4]} onPress={() => onPress(4)} />
                <SquareComponent value={squares[5]} onPress={() => onPress(5)} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <SquareComponent value={squares[6]} onPress={() => onPress(6)} />
                <SquareComponent value={squares[7]} onPress={() => onPress(7)} />
                <SquareComponent value={squares[8]} onPress={() => onPress(8)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default BoardComponent;