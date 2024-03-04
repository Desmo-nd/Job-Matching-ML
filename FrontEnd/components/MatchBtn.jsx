import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const MatchBtn = ({ title, onPress }) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width <= 500; 
  const buttonWidth = isSmallScreen ? '100%' : '40%'; 
  const fontSize = isSmallScreen ? 18 : 16;
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[styles.btnStyle, { width: buttonWidth }]}
    >
        <Text style={[styles.btnTxt, { fontSize }]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MatchBtn

const styles = StyleSheet.create({
    btnStyle:{
        height: 40,
        marginVertical: SIZES.xSmall,
        // marginHorizontal: '3%',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center',
    },
    btnTxt:{
        fontFamily: 'bold',
        color: "#fff",
        fontSize: 18,
        marginVertical: 10
    },
});
