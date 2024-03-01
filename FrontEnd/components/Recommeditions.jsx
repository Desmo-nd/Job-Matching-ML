import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const recommendationsData = [
    { id: 1, title: "Software Engineer", description: "Design, develop, and test software applications and systems.", company: "Tech Company" },
    { id: 2, title: "Data Analyst", description: "Collect, analyze, and interpret data to inform business decisions.", company: "Data Analytics Inc." },
    { id: 3, title: "Marketing Manager", description: "Develop and implement marketing strategies to promote products or services.", company: "Marketing Agency" },
    { id: 4, title: "Graphic Designer", description: "Create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.", company: "Design Studio" },
    { id: 5, title: "Financial Analyst", description: "Provide guidance to businesses and individuals making investment decisions. They assess the performance of stocks, bonds, and other types of investments.", company: "Finance Corporation" },
    { id: 6, title: "HR Manager", description: "Oversee the recruiting, interviewing, and hiring of new staff; consult with top executives on strategic planning; and serve as a link between an organization’s management and its employees.", company: "HR Consulting Firm" },
    { id: 7, title: "Web Developer", description: "Responsible for designing, coding, and modifying websites, from layout to function and according to a client's specifications.", company: "Web Dev Company " },
    { id: 8, title: "Product Manager", description: "Manage the development, marketing, and selling of a product or product line.", company: "Product Development Company" },
    { id: 9, title: "Sales Representative", description: "Sell products, goods, and services to customers.", company: "Sales Company" },
    { id: 10, title: "Customer Service Representative", description: "Interact with customers to handle complaints, process orders, and provide information about an organization’s products and services.", company: "Customer Service Company" },
];


const Recommendations = () => {
    return (
        <View>
            <View>
                <Text style={styles.TopTittle}>Top Recomenditions</Text>
            </View>
            <ScrollView horizontal>
            {recommendationsData.map(recommendation => (
                <View key={recommendation.id} style={styles.container}>
                    <Image source={require("../assets/images/job.webp")} style={styles.image} />
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{recommendation.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.company}>{recommendation.company}</Text>
                    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.description}>{recommendation.description}</Text>
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
