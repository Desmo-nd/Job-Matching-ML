import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import Welcome from "../components/Welcome";


const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Welcome/>
            </ScrollView>
        </SafeAreaView>
    ) 
}

export default Home;

