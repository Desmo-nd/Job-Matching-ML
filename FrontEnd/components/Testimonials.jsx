import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SIZES } from "../constants";



const testimonialData = [
    { id: 1, name: "Mercy Kilel", testimonial: "I have been using this platform for a while now, and it has been a game-changer for me. I posted a job vacancy, and within a few days, I had several qualified applicants. The platform's interface is user-friendly, making it easy to manage job postings and applications. I highly recommend it to anyone looking to streamline their hiring process." },
    { id: 2, name: "Linn Chep", testimonial: "I was in the midst of a challenging job search when I discovered this platform. It was a turning point in my career journey. The platform's intuitive interface made it easy for me to browse through numerous job listings that perfectly matched my skills and experience. I applied to several positions and was thrilled to receive multiple interview requests. The platform's efficient communication tools helped me stay organized throughout the interview process. I am now happily employed at a company I've always admired, and I owe it all to this platform." },
    { id: 3, name: "Cliff Obando", testimonial: "As a hiring manager, I am always looking for ways to find the best talent for my team. This platform has been instrumental in helping me achieve that goal. I can easily post job vacancies, review applications, and communicate with applicants. The platform's advanced features, such as AI-powered matching algorithms, have helped me find the perfect candidates for my team." },];

const Testimonials = () => {
    return (
        <View>
            <View>
                <Text style={styles.testimonialTittle}>Clients Testimonials</Text>
            </View>
            <ScrollView horizontal>
                {testimonialData.map(testimonial => (
                    <View key={testimonial.id} style={styles.testimonialContainer}>
                        <Text style={styles.testimonialName}>{testimonial.name}</Text>
                        <Text numberOfLines={6} ellipsizeMode="tail" style={styles.testimonialText}>{testimonial.testimonial}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    testimonialTittle: {
        fontSize: 24,
        fontFamily: "bold",
        marginTop: 10,
        textAlign: "center",
        marginTop: 20,

    },
    testimonialContainer: {
        marginTop: 10,
        margin: 10,
        width: SIZES.width * 0.9,
        marginHorizontal: SIZES.width * 0.05,
        backgroundColor: "#ADD8E6",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
    },
    testimonialText: {
        fontSize: 14,
        marginBottom: 5,
    },
    testimonialName: {
        fontSize: 12,
        fontFamily: "bold",
        marginBottom: 3,
        textAlign:"center"
    },
    testimonialCompany: {
        fontSize: 12,
        color: "#666",
    },
   
});

export default Testimonials;
