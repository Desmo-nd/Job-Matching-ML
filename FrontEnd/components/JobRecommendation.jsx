import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const JobRecommendation = () => {
    const [userSkills, setUserSkills] = useState('');
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [error, setError] = useState(null);

    const handleRecommendJobs = async () => {
        try {
            const response = await fetch('http://192.168.0.109:5000/recommend-jobs', {
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
                'Job Posting Date': cleanText(job['Job Posting Date']),
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
            <Button title="Recommend Jobs" onPress={handleRecommendJobs} />
            {error && <Text>Error: {error}</Text>}
            <ScrollView>
                {recommendedJobs.map((job, index) => (
                    <View key={index}>
                        <Text>Job Title: {job['Job Title']}</Text>
                        <Text>Company: {job['Company']}</Text>
                        <Text>Location: {job['location']}</Text>
                        <Text>Salary Range: {job['Salary Range']}</Text>
                        <Text>Job Posting Date: {job['Job Posting Date']}</Text>
                        <Text>Job Portal: {job['Job Portal']}</Text>
                    </View>
                ))}
            </ScrollView>
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
    },
});

export default JobRecommendation;
