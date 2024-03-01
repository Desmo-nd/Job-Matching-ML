import React, {useState} from "react";
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity} from "react-native";
import { COLORS, SIZES } from "../constants";
import { LinearGradient } from 'expo-linear-gradient';
import UploadBtn from "./UploadBtn";
import { Ionicons } from "@expo/vector-icons";

const Welcome = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <SafeAreaView>
            <ScrollView>
                <LinearGradient
                    colors={['#FFFFFF', '#ADD8E6']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.container}
                    >    
                    <View style={styles.logobar}>
                        <Text style={styles.logo}>Tru<Text style={{ color: 'rgb(160, 33, 33)' }}>Hire</Text></Text>
                        <View style={styles.menucontainer}>
                            <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
                                <Ionicons name="menu" size={24} color="black" />
                            </TouchableOpacity>
                            {showMenu && (
                                <View style={styles.menuItems}>
                                    <TouchableOpacity onPress={() => handleNavigation("Home")}>
                                    <Text style={styles.text}>Home</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleNavigation("About Us")}>
                                    <Text style={styles.text}>About Us</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleNavigation("Services")}>
                                    <Text style={styles.text}>Services</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleNavigation("Sign In")}>
                                    <Text style={styles.text}>Sign In</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleNavigation("Sign Up")}>
                                    <Text style={styles.text}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
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
    menucontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 10,
      },
      menuItems: {
        position: "absolute",
        top: 40, 
        right: -18,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        zIndex: 1, 
        width: 100,
      },
      text: {
        fontSize: 16,
        fontFamily: "semibold",
        borderColor: "#ccc",
        borderBottomWidth: 1,
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