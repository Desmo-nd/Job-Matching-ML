import React from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import Welcome from "../components/Welcome";
import ChooseUs from "../components/ChooseUs";
import Recommeditions from "../components/Recommeditions";
import Testimonials from "../components/Testimonials";


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
            </ScrollView>
        </SafeAreaView>
    ) 
}

export default Home;

