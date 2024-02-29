import React from "react";
import {View, StyleSheet, Text} from "react-native";
import { SIZES, COLORS } from "../constants";
const ChooseUs = () => {
    return (
        <View>
            <View style={styles.innnerCont}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.whyCont}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>WHY</Text>
                            <Text style={styles.text}>CHOOSE</Text>
                            <Text style={styles.text}>US ?</Text>
                        </View>
                    </View>
                    <View style={styles.triangle}></View>
                </View>
                <View style={styles.ReasonsCont}>
                    <Text style={styles.reasonText}>Efficient: Streamline posting and applying.</Text>
                    <Text style={styles.reasonText}>Wide Reach: Access a large pool of applicants.</Text>
                    <Text style={styles.reasonText}>Advanced: Use AI and assessments for better matches.</Text>
                    <Text style={styles.reasonText}>Secure: Ensure data security and confidentiality.</Text>
                </View>


            </View>
        </View>
    )
}
export default ChooseUs
const styles = StyleSheet.create({
    innnerCont:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    whyCont:{
        backgroundColor: COLORS.primary,
        padding: 10,
        width: SIZES.width * 0.3,
        height: SIZES.width * 0.40,
    },
    triangle:{
        position: 'relative',
        overflow: 'hidden',
        height: 67,
        width: SIZES.width * 0.2,
        borderTopWidth: 70, 
        borderBottomWidth: 100, 
        borderLeftWidth: 50,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor:  COLORS.primary,
    },
    textContainer: {
      
    },
    text: {
        fontSize: 29,
        fontFamily: 'bold',
        color: 'white',
        paddingTop: 10,
    },
    ReasonsCont:{
        width: SIZES.width * 0.60,
        height: SIZES.width * 0.40,
        marginLeft: -30,
        paddingTop: 3,
    },
    reasonText:{
        fontSize: 15,
        fontFamily: 'regular',
        color: "#000",
        marginVertical: 2,
        marginHorizontal: 5,
    }
    
})
