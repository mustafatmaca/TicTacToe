import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const renderIcon = (value) => {
  switch (value) {
    case 1: return <Ionicons name="close-outline" size={65} color="#dc143c" />;
    case -1: return <Ionicons name="ellipse-outline" size={65} color="#228b22" />;
    default: return <View />
  }
};

const SquareComponent = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      {renderIcon(value)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
    margin: 5,
    borderRadius: 20,
    width: 100,
    height: 100,
  }
});

export default SquareComponent;