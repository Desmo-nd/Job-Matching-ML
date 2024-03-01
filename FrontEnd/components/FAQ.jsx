import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES } from "../constants";
import { LinearGradient } from 'expo-linear-gradient';


const FAQItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.questionContainer}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.question}>{question}</Text>
        <Ionicons name={showAnswer ? "chevron-up" : "chevron-down"} size={24} color="black" />
      </TouchableOpacity>
      {showAnswer && <Text style={styles.answer}>{answer}</Text>}
    </View>
  );
};

const FAQs = () => {
  return (
    <LinearGradient
    colors={['#FFFFFF', '#ADD8E6']}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
    style={styles.container}
    >   
    <Text style={styles.title}>Frequently Asked Questions (FAQ<Text>s</Text>)</Text>
    <View>
        <FAQItem
            question="How do I post a job on your website?"
            answer="To post a job, simply create an account on our website and navigate to the 'Post a Job' section. Fill in the required details about the job, such as title, description, and requirements, and submit the posting. Our team will review the job posting before it goes live on our platform."
        />
        <FAQItem
            question="How can I upload my resume for job matching?"
            answer="You can upload your resume by creating a candidate profile on our website. Navigate to the 'Upload Resume' section and follow the instructions to upload your resume. Our machine learning algorithms will analyze your resume to match you with relevant job postings."
        />
        <FAQItem
            question="How long does it take for my resume to be screened and analyzed?"
            answer="Our machine learning algorithms analyze resumes as soon as they are uploaded. The time it takes to receive job matches depends on the complexity of the analysis and the number of resumes in our system. You will receive an email notification once your resume has been analyzed and matches are available."
        />
        <FAQItem
            question="Can I apply for jobs directly through your website?"
            answer="Yes, you can apply for jobs directly through our website. Once you find a job listing that interests you, simply click on the 'Apply Now' button and follow the instructions to submit your application."
        />
        <FAQItem
            question="How can I contact your support team for assistance?"
            answer="You can contact our support team via email at support@mercyKilel.com or through the 'Contact Us' section on our website. Our support team is available to assist you with any questions or issues you may have."
        />
    </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
   title:{
    fontSize: 24,
    fontFamily: "bold",
    marginTop: 10,
    textAlign: "center",
   },
  item: {
    width: SIZES.width * 0.9,
    marginHorizontal: SIZES.width * 0.05,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  answer: {
    marginTop: 10,
  },

});

export default FAQs;
