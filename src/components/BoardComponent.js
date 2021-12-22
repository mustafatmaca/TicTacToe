import React from "react";
import { View, StyleSheet } from "react-native";
import SquareComponent from "./SquareComponent";

const BoardComponent = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <SquareComponent key={0} value={props.squares[0]} onPress={() => props.onPress(0)} />
                <SquareComponent key={1} value={props.squares[1]} onPress={() => props.onPress(1)} />
                <SquareComponent key={2} value={props.squares[2]} onPress={() => props.onPress(2)} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <SquareComponent key={3} value={props.squares[3]} onPress={() => props.onPress(3)} />
                <SquareComponent key={4} value={props.squares[4]} onPress={() => props.onPress(4)} />
                <SquareComponent key={5} value={props.squares[5]} onPress={() => props.onPress(5)} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <SquareComponent key={6} value={props.squares[6]} onPress={() => props.onPress(6)} />
                <SquareComponent key={7} value={props.squares[7]} onPress={() => props.onPress(7)} />
                <SquareComponent key={8} value={props.squares[8]} onPress={() => props.onPress(8)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default BoardComponent;