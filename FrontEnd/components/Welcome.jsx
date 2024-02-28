import React from "react";
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "../constants";
import { Ionicons } from "@expo/vector-icons";

const Welcome = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <StatusBar barStyle="light-content"  backgroundColor={COLORS.primary}/>
                <View style={styles.container}>
                    <View style={styles.logobar}>
                        <Text style={styles.logo}>Skill<Text style={{ color: 'rgb(160, 33, 33)' }}>Up</Text></Text>
                        {/* <Ionicons name="menu" size={40} color={COLORS.secondary}/> */}
                        <View style={styles.menu}>
                            <Text>Home</Text>
                            <Text>About Us</Text>
                            <Text>Services</Text>
                            <Text>Sign In</Text>
                            <Text>Sign Up</Text>
                        </View>
                    </View>
                    <View style={styles.welcome}>
                        <Text>The best job Matching Website</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    ) 
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
    },
    logobar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width * 0.7,
    },

})