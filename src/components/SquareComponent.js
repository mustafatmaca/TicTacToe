import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const SquareComponent = () => {
    return (
        <TouchableOpacity style={styles.square}>
            <Ionicons name="md-close" size={65} color="#dc143c" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    square: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1b1b1b',
      borderWidth: 1,
      borderColor: 'transparent',
      margin: 10,
      borderRadius: 20,
  
      lineHeight: 34,
      marginRight: -1,
      marginTop: -1,
      padding: 0,
      width: 100,
      height: 100,
    },
    char: {
      flexDirection: 'row',
      fontSize: 75,
      fontWeight: '700',
      color: '#228b22',
    },
  });

  export default SquareComponent;