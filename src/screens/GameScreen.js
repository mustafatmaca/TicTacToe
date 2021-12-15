import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SquareComponent from "../components/SquareComponent";

const GameScreen = (props) => {
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
            <View style = {{alignItems: 'center'}}>
                <View style = {styles.viewStyle}>
                    <SquareComponent></SquareComponent>
                    <SquareComponent></SquareComponent>
                    <SquareComponent></SquareComponent>
                </View>
                <View style = {styles.viewStyle}>
                    <SquareComponent></SquareComponent>
                    <SquareComponent></SquareComponent>
                    <SquareComponent></SquareComponent>
                </View>
                <View style = {styles.viewStyle}>
                    <SquareComponent></SquareComponent>
                    <SquareComponent></SquareComponent>
                    <SquareComponent></SquareComponent>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default GameScreen;