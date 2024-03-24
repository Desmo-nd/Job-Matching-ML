import React, {useState} from "react";
import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from "react-native";
import { COLORS, SIZES } from "../constants";
import { LinearGradient } from 'expo-linear-gradient';
import UploadBtn from "./UploadBtn";
import styles from "./welcome.styles";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import JobRecommendation from "./JobRecommendation";

const Welcome = () => {
    const navigation = useNavigation(); // Use useNavigation hook here

    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };
    return (
        <SafeAreaView>
                <View style={styles.container}>  
                    <Image source={require('../assets/images/work2.png')} 
                        style={{width: "100%", 
                                height: "100%", 
                                resizeMode: 'cover',
                        }}/>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0)']} // Adjust colors and opacity as needed
                        start={{ x: 0, y: 0 }} // Start from left
                        end={{ x: 1.5, y: 0 }} // End at right
                        style={styles.overlay}
                    >
                        <View style={styles.logobar}>
                            <Text style={styles.logo}>Tru<Text style={{ color: 'rgb(160, 33, 33)' }}>Hire</Text></Text>
                            <View style={styles.menucontainer}>
                                <View style={styles.menuItems}>
                                    <TouchableOpacity style={styles.menuCont} onPress={() => handleNavigation("Home")}>
                                        <Text style={styles.text}>Home</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.menuCont} onPress={() => handleNavigation("About Us")}>
                                        <Text style={styles.text}>About Us</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.menuCont} onPress={() => handleNavigation("Services")}>
                                        <Text style={styles.text}>Services</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.menuCont} onPress={() => handleNavigation('Login')}>
                                        <Text style={styles.text}>Sign In</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.menuCont} onPress={() => handleNavigation('Signup')}>
                                        <Text style={styles.text}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.welcomeCont}>
                            <View style={styles.welcome}>
                                <Text style={styles.best}>The best job Matching Website</Text>                                
                                <Text style={styles.description}>
                                    Find your dream job with ease! Upload your resume, and our advanced algorithms will analyze your skills to provide personalized job recommendations.
                                </Text>
                                <UploadBtn
                                    title="Upload Resume"
                                    onPress={() => console.log('Upload Resume')}
                                    style={{width: "100%"}}
                                />
                            </View>
                            <View style={styles.imageCont}>
                       
                            </View> 
                        </View>
                        <JobRecommendation/>

                        </LinearGradient>
                </View>
        </SafeAreaView>
    ) 
}

export default Welcome;

