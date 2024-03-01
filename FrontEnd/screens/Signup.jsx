import React from "react";
import {Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SIZES } from "../constants";
import { LinearGradient } from 'expo-linear-gradient';

const Signup = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#ADD8E6']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}
      >   
        <LinearGradient
          colors={['#ADD8E6','#FFFFFF']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.innerContainer}
          >   
          <Text style={styles.title}>Sign Up</Text>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  innerContainer:{
    backgroundColor: "#ADD8E6",
    width: SIZES.width*0.9,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "bold",
  },
});

export default Signup;
