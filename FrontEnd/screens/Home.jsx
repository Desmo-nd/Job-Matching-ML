import React from "react";
import {SafeAreaView, ScrollView, View, Text} from "react-native";
import Welcome from "../components/Welcome";
import ChooseUs from "../components/ChooseUs";
import Recommeditions from "../components/Recommeditions";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import SignUpPrompt from "../components/SignUpPrompt";
import styles from "./home.styles";


const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Welcome/>
                </View>
                
                < View>
                    <ChooseUs/>
                </View>
                <View>
                    <Recommeditions/>
                </View>
                <View>
                    <Testimonials/>
                </View>
                <View>
                    <FAQ/>
                </View>
                <View>
                    <SignUpPrompt/>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text}>© 2024 JobMatch. All Rights Reserved.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    ) 
}

export default Home;

