import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import MatchBtn from './MatchBtn';

const JobRecommendation = () => {
    const [userSkills, setUserSkills] = useState('');
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [error, setError] = useState(null);

    const handleRecommendJobs = async () => {
        // Your fetch logic here
    };

    return (
        <View>
            <View style={styles.container}>
            <TextInput
                    placeholder="Enter your skills separated by commas"
                    placeholderTextColor="#fff" // Placeholder text color
                    value={userSkills}
                    onChangeText={(text) => setUserSkills(text)}
                    style={styles.input}
                />
                <MatchBtn 
                    title="Recommend" 
                    onPress={handleRecommendJobs}
                    style={styles.button}
                />
            </View>
            {error && <Text>Error: {error}</Text>}
            <ScrollView style={styles.jobList}>
                {recommendedJobs.map((job, index) => (
                    <View key={index} style={styles.jobContainer}>
                        {/* Display job information */}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '49%',
        marginTop: SIZES.large,
    },
    input: {
        height: 40,
        width: '77%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        // backgroundColor: '#FFFFFF', 
        color: '#fff', 
        fontFamily: 'regular',
    },
    button: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    jobList: {
        marginTop: 10,
    },
    jobContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#00000019',
    },
});

export default JobRecommendation;
