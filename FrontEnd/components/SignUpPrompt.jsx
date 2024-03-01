import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";

const SignUpPrompt = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>
        Sign up to receive notifications about new job postings and other
        updates!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    marginTop: 20,
  },
  promptText: {
    fontSize: 19,
    width: SIZES.width * 0.9,
    fontFamily: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "bold",
  },
});

export default SignUpPrompt;
