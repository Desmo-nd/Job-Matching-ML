import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { Ionicons } from "@expo/vector-icons";



const UploadBtn = ({ title, onPress }) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width <= 500; 
  const buttonWidth = isSmallScreen ? '60%' : '40%'; 
  const fontSize = isSmallScreen ? 18 : 16;
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[styles.btnStyle, { width: buttonWidth }]}
    >
        <View style={{width:"70%"}}>
            <Text style={[styles.btnTxt, { fontSize }]}>{title}</Text>
        </View>
        <View style={styles.iconCont}>
            <Ionicons name="cloud-upload" size={24} color="white" />
        </View>
    </TouchableOpacity>
  )
}

export default UploadBtn

const styles = StyleSheet.create({
    btnStyle:{
        height: 40,
        marginVertical: SIZES.xSmall,
        alignSelf: 'center',
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',    
    },
    btnTxt:{
        fontFamily: 'bold',
        color: "#000",
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: "auto",
        paddingLeft: 10,
    },
    iconCont:{
        width:"30%",
        height:"100%",
        backgroundColor:"#285db8",
        justifyContent: 'center',
        alignItems: 'center',
    }
});
