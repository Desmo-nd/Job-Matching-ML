import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const removePunctuation = (text) => {
    return text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
};

const capitalizeFirstLetter = (string) => {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
};
const Recommendations = () => {
    const [recommendationsData, setRecommendationsData] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.112:5000/most-in-demand-jobs')
            .then(response => response.json())
            .then(data => setRecommendationsData(data.jobs))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <View>
            <View>
                <Text style={styles.TopTittle}>Top Recommendations</Text>
            </View>
            <ScrollView horizontal>
                {recommendationsData.map(recommendation => (
                    <View key={recommendation.id} style={styles.container}>
                        <Image source={require("../assets/images/job.webp")} style={styles.image} />
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{capitalizeFirstLetter(removePunctuation(recommendation['Job Title']))}</Text>
                        <View style={{flexDirection:"row", justifyContent:"space-between", width:"95%"}}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.company}>{recommendation['Salary Range']}</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.company}>{recommendation['Job Posting Date']}</Text>
                        </View>
                        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.description}>{capitalizeFirstLetter(removePunctuation(recommendation['Job Description']))}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: 200,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 5,
        marginBottom: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    description: {
        fontSize: 14,
    },
    TopTittle: {
        fontSize: 24,
        fontFamily: "bold",
        marginTop: 10,
        textAlign: "center",
    },
    company: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    },
});

export default Recommendations;
