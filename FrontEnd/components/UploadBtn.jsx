import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions, Alert } from "react-native";
import { COLORS, SIZES } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';

const UploadBtn = ({ title }) => {
    const { width } = useWindowDimensions();
    // const isSmallScreen = width <= 500;
    // const buttonWidth = isSmallScreen ? '60%' : '40%';
    // const fontSize = isSmallScreen ? 18 : 16;

    const [selectedDocument, setSelectedDocument] = useState(null);

    const handleUpload = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
            if (result.type === 'success') {
                setSelectedDocument(result.name);
                Alert.alert('File Selected', `File name: ${result.name}`);
                // Handle the uploaded file here, e.g., upload it to a server
            }
        } catch (error) {
            console.log('Document picking error:', error);
        }
    };

    return (
        <View style={{width:SIZES.width}}>
            <TouchableOpacity
                onPress={handleUpload}
                style={[styles.btnStyle, ]}
            >
                <View style={{ width: "100%" }}>
                    <Text style={[styles.btnTxt]}>{title}</Text>
                </View>
                <View style={styles.iconCont}>
                    <Ionicons name="cloud-upload" size={24} color="white" />
                </View>
            </TouchableOpacity>
            {selectedDocument && <Text style={styles.selectedDocument}>{selectedDocument}</Text>}
        </View>
    )
};

export default UploadBtn;

const styles = StyleSheet.create({
    btnStyle: {
        height: 40,
        width: "35%",
        marginVertical: SIZES.xSmall,
        marginTop: SIZES.large,
        backgroundColor: "#fff",
       
        // borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnTxt: {
        fontFamily: 'bold',
        color: "#000",
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: "auto",
        paddingLeft: 10,
    },
    iconCont: {
        width: "30%",
        height: "100%",
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedDocument: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'regular',
        fontSize: 40,
    }
});
