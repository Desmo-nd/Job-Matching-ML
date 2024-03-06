import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import {COLORS } from '../constants';
import MatchBtn from './MatchBtn';

const JobRecommendation = () => {
    const [userSkills, setUserSkills] = useState('');
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [error, setError] = useState(null);

    const handleRecommendJobs = async () => {
        try {
            const response = await fetch('http://192.168.43.101:5000/recommend-jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_skills: userSkills })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();

            // Remove punctuation from job titles, companies, and other fields
            const cleanedJobs = data.map(job => ({
                ...job,
                'Job Title': cleanText(job['Job Title']),
                'Company': cleanText(job['Company']),
                'location': cleanText(job['location']),
                'Job Portal': cleanText(job['Job Portal']),
            }));

            setRecommendedJobs(cleanedJobs);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching recommended jobs:', error);
        }
    };

    const cleanText = (text) => {
        return text.replace(/[^\w\s]/gi, ''); // Remove all non-word characters except spaces
    };

    return (
        <View>
            <TextInput
                placeholder="Enter your skills separated by commas"
                value={userSkills}
                onChangeText={(text) => setUserSkills(text)}
                style={styles.input}
            />
            <MatchBtn 
                title="Recommend Jobs" 
                onPress={handleRecommendJobs}
                style={styles.button}
            />
            {error && <Text>Error: {error}</Text>}
            <View style={styles.jobList}>
                {recommendedJobs.map((job, index) => (
                    <View key={index} style={styles.jobContainer}>
                        <Text style={styles.infoText}>Job Title: {job['Job Title']}</Text>
                        <Text style={styles.infoText}>Company: {job['Company']}</Text>
                        <Text style={styles.infoText}>Location: {job['location']}</Text>
                        <Text style={styles.infoText}>Salary Range: {job['Salary Range']}</Text>
                        <Text style={styles.infoText}>Job Posting Date: {job['Job Posting Date']}</Text>
                        <Text style={styles.infoText}>Job Portal: {job['Job Portal']}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontFamily: 'regular',
    },      
    jobContainer: {
        width: '88%', 
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#00000019',

    },
    infoText: {
        fontSize: 16,
        fontFamily: 'regular',
    },
    button: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    }
});

export default JobRecommendation;
