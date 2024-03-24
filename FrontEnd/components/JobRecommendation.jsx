// import React, { useState } from 'react';
// import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
// import { COLORS, SIZES } from '../constants';
// import MatchBtn from './MatchBtn';

// const JobRecommendation = () => {
//     const [userSkills, setUserSkills] = useState('');
//     const [recommendedJobs, setRecommendedJobs] = useState([]);
//     const [error, setError] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [selectedJob, setSelectedJob] = useState(null);

    
// const toggleModal = (job) => {
//         setSelectedJob(job);
//         setIsModalVisible(!isModalVisible);
//     };
//     const handleRecommendJobs = async () => {
//         try {
//             const response = await fetch('http://192.168.0.112:5000/recommend-jobs', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ user_skills: userSkills })
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const data = await response.json();

//             // Remove punctuation from job titles, companies, and other fields
//             const cleanedJobs = data.map(job => ({
//                 ...job,
//                 'Job Title': cleanText(job['Job Title']),
//                 'Company': cleanText(job['Company']),
//                 'location': cleanText(job['location']),
//                 'Job Portal': cleanText(job['Job Portal']),
//             }));

//             setRecommendedJobs(cleanedJobs);
//         } catch (error) {
//             setError(error.message);
//             console.error('Error fetching recommended jobs:', error);
//         }
//     };

//     const cleanText = (text) => {
//         return text.replace(/[^\w\s]/gi, ''); 
//     };

//     return (
//         <View>
//             <View style={styles.container}>
//             <TextInput
//                     placeholder="Enter your skills separated by commas"
//                     placeholderTextColor="#fff" 
//                     value={userSkills}
//                     onChangeText={(text) => setUserSkills(text)}
//                     style={styles.input}
//                 />
//                 <MatchBtn 
//                     title="Recommend" 
//                     onPress={handleRecommendJobs}
//                     style={styles.button}
//                 />
//             </View>
//             {error && <Text>Error: {error}</Text>}
//             <ScrollView style={styles.jobList}>
//                 {recommendedJobs.map((job, index) => (
//                     <View key={index} style={styles.jobContainer}>
//                         <Text style={styles.infoText}>Job Title: {job['Job Title']}</Text>
//                         <Text style={styles.infoText}>Company: {job['Company']}</Text>
//                         <Text style={styles.infoText}>Location: {job['location']}</Text>
//                         <Text style={styles.infoText}>Salary Range: {job['Salary Range']}</Text>
//                         <Text style={styles.infoText}>Job Posting Date: {job['Job Posting Date']}</Text>
//                         <Text style={styles.infoText}>Job Portal: {job['Job Portal']}</Text>
//                     </View>
//                 ))}
//             </ScrollView>
            
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         width: '49%',
//         marginTop: SIZES.large,
//     },
//     input: {
//         height: 40,
//         width: '77%',
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,
//         paddingHorizontal: 10,
//         // backgroundColor: '#FFFFFF', 
//         color: '#fff', 
//         fontFamily: 'regular',
//     },
//     button: {
//         backgroundColor: COLORS.primary,
//         color: COLORS.white,
//         padding: 10,
//         borderRadius: 5,
//         marginTop: 10,
//     },
//     jobList: {
//        zIndex: 3,
//     },
//     jobContainer: {
//         borderWidth: 1,
//         borderColor: 'lightgray',
//         padding: 10,
//         marginBottom: 10,
//         borderRadius: 5,
//         backgroundColor: '#00000019',
//     },
//     infoText: {
//         color: '#fff',
//         marginBottom: 5,
//     },
// });

// export default JobRecommendation;
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Modal, TouchableHighlight } from 'react-native'; // Import Modal and TouchableHighlight
import { COLORS, SIZES } from '../constants';
import MatchBtn from './MatchBtn';
const JobRecommendation = () => {
    const [userSkills, setUserSkills] = useState('');
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [error, setError] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    
const toggleModal = (job) => {
        setSelectedJob(job);
        setIsModalVisible(!isModalVisible);
    };
    const handleRecommendJobs = async () => {
        try {
            const response = await fetch('http://192.168.0.112:5000/recommend-jobs', {
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

            const cleanedJobs = data.map(job => ({
                ...job,
                'Job Title': cleanText(job['Job Title']),
                'Company': cleanText(job['Company']),
                'location': cleanText(job['location']),
                'Job Portal': cleanText(job['Job Portal']),
            }));

            setRecommendedJobs(cleanedJobs);
            toggleModal(cleanedJobs[0]);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching recommended jobs:', error);
        }
    };

    const cleanText = (text) => {
        return text.replace(/[^\w\s]/gi, ''); 
    };

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter your skills separated by commas"
                    placeholderTextColor="#fff"
                    value={userSkills}
                    onChangeText={(text) => setUserSkills(text)}
                    style={styles.input}
                />
                <MatchBtn
                    title="Recommend"
                    onPress={() => {
                        handleRecommendJobs();
                        toggleModal(job)
                    }}
                    style={styles.button}
                />
            </View>
       

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
                style={styles.modal}
            >
                <ScrollView style={styles.jobList}>
                <View style={styles.jobCont}> 
                
                <Text style={styles.header}>Recomenditions</Text>   
                    {recommendedJobs.map((job, index) => (
                                  
                        <TouchableHighlight key={index} onPress={() => toggleModal(job)}>
                            <View style={styles.jobContainer}>
                                <Text style={styles.infoText}>Job Title: {job['Job Title']}</Text>
                                <Text style={styles.infoText}>Company: {job['Company']}</Text>
                                <Text style={styles.infoText}>Location: {job['location']}</Text>
                                <Text style={styles.infoText}>Salary Range: {job['Salary Range']}</Text>
                                <Text style={styles.infoText}>Job Posting Date: {job['Job Posting Date']}</Text>
                                <Text style={styles.infoText}>Job Portal: {job['Job Portal']}</Text>
                            </View>
                        </TouchableHighlight>
                       
                    ))}
                    <TouchableHighlight onPress={() => setIsModalVisible(false)} style={styles.closeBtn}>
                        <Text style={styles.closeBtnText}>Close</Text>
                    </TouchableHighlight>
                    </View>
                </ScrollView>
            </Modal>
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
        marginTop: "10%",
        width: '60%',
        
        alignSelf: 'center',
        margin: 'auto'
    
    },
    jobCont:{
       backgroundColor: COLORS.lightWhite,
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
    jobContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        // padding: 10,
        // marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#e9eef0",
        marginHorizontal: 30,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    header:{
        color: '#000',
        fontSize: 20,
        fontFamily: "bold",
        textAlign: "center",
    },
    infoText:{
        color: '#000',
        padding: 6
    },
    closeBtn:{
        color: "#fff",
        backgroundColor: COLORS.primary,
        width: "50% ",
        height: 40,
        alignSelf: "center",
        margin:20,
        borderRadius: 5,
    },
    closeBtnText:{
        color: "#fff",
        textAlign: "center",
        fontFamily: "bold", 
        marginTop: 10
    }
    
});

export default JobRecommendation;
