import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { Ionicons } from "@expo/vector-icons";

const MatchBtn = ({ title, onPress }) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width <= 500; 
  const buttonWidth = isSmallScreen ? '100%' : '24%'; 
  const fontSize = isSmallScreen ? 18 : 16;
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[styles.btnStyle, { width: buttonWidth }]}
    >
    <Ionicons name="search" size={24} color="white" />
    </TouchableOpacity>
  )
}

export default MatchBtn

const styles = StyleSheet.create({
    btnStyle:{
        width: '20%',
        height: 40,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt:{
        fontFamily: 'bold',
        color: "#fff",
        fontSize: 18,
    },
});
