import React from "react";
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "../constants";
import { LinearGradient } from 'expo-linear-gradient';
import UploadBtn from "./UploadBtn";

const Welcome = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* <StatusBar barStyle="light-content"  backgroundColor={COLORS.primary}/> */}
                <LinearGradient
                    colors={['#FFFFFF', '#ADD8E6']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.container}
                    >    
                    <View style={styles.logobar}>
                        <Text style={styles.logo}>Tru<Text style={{ color: 'rgb(160, 33, 33)' }}>Hire</Text></Text>
                        <View style={styles.menu}>
                            <Text>Home</Text>
                            <Text>About Us</Text>
                            <Text>Services</Text>
                            <Text>Sign In</Text>
                            <Text>Sign Up</Text>
                        </View>
                    </View>
                    <View style={styles.welcomeCont}>
                        <View style={styles.welcome}>
                            <Text style={styles.best}>The best job </Text>
                            <Text style={styles.match}> Matching Website</Text>
                            <Image source={require('../assets/images/job.webp')} 
                            style={{width: SIZES.width * 0.9, 
                                    height: SIZES.width * 0.5, 
                                    resizeMode: 'contain',
                                    // marginRight: 120,
                                    // marginTop: 120, 
                                    // padding: 20,
                                    }}/>
                            <Text style={styles.description}>
                                Find your dream job with ease! Upload your resume, and our advanced algorithms will analyze your skills to provide personalized job recommendations.
                            </Text>
                            <UploadBtn
                                title="Upload Resume"
                                // onPress={() => console.log('Upload Resume')}
                            />

                        </View>
                        <View style={styles.imageCont}>
                       
                        </View>
                    </View>
                </LinearGradient>
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
        marginTop: 34,
    },
    logo:{
        fontSize: 20,
        color: "#000",
        fontFamily: 'bold',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width * 0.7,
    },

    best:{
        fontSize: 44,
        color: '#000',
        fontFamily: 'semibold',
        marginTop: 20,
        textAlign   : 'center',
 },

    match:{
        marginTop: -10,
        fontSize: 27,
        fontFamily: 'bold',
        color: '#000',
        textAlign   : 'center',

    },
    description:{
        // width: SIZES.width * 0.6,
        fontFamily: 'regular',
        textAlign   : 'center',

    },
   
    welcomeCont:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    }, 
    
  
})