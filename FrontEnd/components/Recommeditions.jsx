import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from "react-native";
import {COLORS} from "../constants";

const removePunctuation = (text) => {
    return text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
};

const capitalizeFirstLetter = (string) => {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
};

const Recommendations = () => {
    const [recommendationsData, setRecommendationsData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRecommendation, setSelectedRecommendation] = useState(null);

    const handleModalOpen = (recommendation) => {
        setSelectedRecommendation(recommendation);
        setModalVisible(true);
    };
    
    const handleModalClose = () => {
        setSelectedRecommendation(null);
        setModalVisible(false);
    };
    
    useEffect(() => {
        fetch('http://192.168.0.112:5000/most-in-demand-jobs')
            .then(response => response.json())
            .then(data => setRecommendationsData(data.jobs))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
        <Text style={styles.topTitle}>Top Recommendations</Text>
        <View style={styles.row}>
            {recommendationsData.map(recommendation => (
                <TouchableOpacity key={recommendation.id} style={styles.itemContainer} onPress={() => handleModalOpen(recommendation)}>
                    <Image source={require("../assets/images/job.webp")} style={styles.image} />
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                        {capitalizeFirstLetter(removePunctuation(recommendation['Job Title']))}
                    </Text>
                    <View style={{flexDirection:"row", alignSelf:"center"}}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.company}>
                            {recommendation['Salary Range']}
                        </Text>
                        <Text>   </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.company}>
                            {recommendation['Job Posting Date']}
                        </Text>
                        
                    </View>
                    <TouchableOpacity style={styles.moreCont} onPress={() => handleModalOpen(recommendation)}>
                        <Text style={styles.moreBtn}>More</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            ))}
        </View>
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={handleModalClose}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                        <Image source={require("../assets/images/job.webp")} style={styles.modalimage} />

                            {selectedRecommendation && (
                                <>
                                    <Text style={styles.modalTitle}>
                                        {capitalizeFirstLetter(removePunctuation(selectedRecommendation['Job Title']))}
                                    </Text>
                                    <Text style={styles.modalDate}>
                                        Posting Date: {selectedRecommendation['Job Posting Date']}
                                    </Text>
                                    <Text style={styles.modalDescription}>
                                        {capitalizeFirstLetter(removePunctuation(selectedRecommendation['Job Description']))}
                                    </Text>
                                </>
                            )}
                            <TouchableOpacity style={styles.applyCont} onPress={handleModalClose}>
                                <Text style={styles.applyBtn}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.lightWhite,
    },
    topTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        alignSelf: "center",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    itemContainer: {
        width: 230, 
        marginBottom: 10,
        borderWidth: 1,
        borderColor: COLORS.primary ,
        borderRadius: 5,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 5,
        marginBottom: 5,
    },
    modalimage:{
        width: 200,
        height: 200,
        backgroundColor: COLORS.lightWhite,
        borderRadius: "100%",
        marginBottom: 5,
        alignSelf: "center",
        marginTop: -100,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    description: {
        fontSize: 14,
    },
    company: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalContent: {
        backgroundColor: COLORS.lightWhite,
        padding: 20,
        borderRadius: 10,
        width: "60%",
        height: "40%",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        alignSelf: "center",
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 10,
    },
    modalDate: {
        fontSize: 14,
        color: "#666",
        marginBottom: 10,
    },
    moreCont:{
        backgroundColor: COLORS.primary,
        width: "60%",
        height: 30,
        alignSelf: "center",
        borderRadius: 3,
    },
    moreBtn:{
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        fontFamily: "bold",
        // textDecorationLine: "underline",
        marginTop: 3,
    },

    applyCont:{
        backgroundColor: COLORS.primary,
        width: "30%",
        height: 40,
        alignSelf: "center",
    },
    
    applyBtn: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        fontFamily: "bold",
        // textDecorationLine: "underline",
        marginTop: 10,
    },
});

export default Recommendations;
