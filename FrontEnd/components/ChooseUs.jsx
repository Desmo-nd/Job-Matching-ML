import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import { SIZES, COLORS } from "../constants";
import { Ionicons } from "@expo/vector-icons";


const ChooseUs = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerCont}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.whyCont}>
                        {/* <View style={styles.textContainer}>
                            <Text style={styles.title}>WHY</Text>
                            <Text style={styles.title}>CHOOSE</Text>
                            <Text style={styles.title}>US?</Text>

                        </View> */}
                        <Image 
                            source={require("../assets/images/gradbg.png")} 
                            style={{
                                width: "100%", 
                                height: "100%", 
                                marginTop: 10, 
                                marginLeft: 10,
                            }}/>

                    </View>
                    {/* <View style={styles.triangle}></View>
                    <View style={styles.parallelogram}></View> */}
                </View>

                <View style={styles.reasonsCont}>
                    <View style={{flexDirection:"row"}}>
                        <Ionicons 
                            name="checkmark-circle" 
                            size={25} 
                            color="purple" 
                            style={{
                                marginTop: 10,
                            }} 
                        />
                        <Text style={styles.reasonText}> Efficient: Streamline posting and applying.                    </Text>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Ionicons 
                            name="globe" 
                            size={25} 
                            color="purple" 
                            style={{
                                marginTop: 15,
                            }} 
                            /> 
                        <Text style={styles.reasonText}>Wide Reach: Access a large pool of applicants.</Text>
                    </View>
                   
                    <View style={{flexDirection:"row"}}>
                        <Ionicons 
                            name="analytics" 
                            size={25} 
                            color="purple"
                            style={{
                                marginTop: 25,
                            }} 
                        /> 
                        <Text style={styles.reasonText}>Advanced: Use AI and assessments for better matches.</Text>
                    </View>  
                   
                    <View style={{flexDirection:"row"}}>
                        <Ionicons 
                            name="lock-closed" 
                            size={25} 
                            color="purple" 
                            style={{
                                marginTop: 15,
                            }} 
                        /> 
                        <Text style={styles.reasonText}>Secure: Ensure data security and confidentiality.</Text>
                    </View>

                    
                </View>
            </View>
        </View>
    );
};
export default ChooseUs;
const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginRight: 7,
        marginTop: 10,
    },
    innerCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    whyCont: {
        // backgroundColor: COLORS.primary,
        padding: 10,
        width: SIZES.width * 0.3,
        height: SIZES.width * 0.2,
    },
    // triangle: {
    //     position: 'relative',
    //     overflow: 'hidden',
    //     height: 0,
    //     width: 0,
    //     borderTopWidth: 67,
    //     borderBottomWidth: 100,
    //     borderLeftWidth: 50,
    //     borderTopColor: 'transparent',
    //     borderBottomColor: 'transparent',
    //     borderLeftColor: COLORS.primary,
    // },
    // parallelogram: {
    //     width: 25,
    //     height: 100,
    //     backgroundColor: "#FBA834",
    //     transform: [{ skewY: '27deg' }],
    //     marginTop: 110,
    //     marginLeft: -34,
    // },
    // textContainer: {
    //     padding: 8,   
    // },
    // title: {
    //     fontSize: 24,
    //     fontFamily: 'bold',
    //     color: 'white',
    //     paddingTop: 10,
    // },
    reasonsCont: {
        width: SIZES.width * 0.5,
        paddingVertical: 10,
    },
    reasonText: {
        fontSize: 16,
        fontFamily: 'regular',
        color: "#000",
        marginVertical: 5,
        marginHorizontal: 10,
    },
});
