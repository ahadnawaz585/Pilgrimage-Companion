import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Speech from 'expo-speech';
import supportedLanguages from '../Utils/supportedLanguages';
import colors from '../Utils/colors';
import TranslateText from '../Service/languageTranslation.service';
import { uploadImageToTextAPI } from '../Service/uploadImageToText.service';

const TranslateImageText = () => {
    const [enteredText, setEnteredText] = useState("");
    const [resultText, setResultText] = useState("");
    const [languageTo, setLanguageTo] = useState("fr");
    const [languageFrom, setLanguageFrom] = useState("auto");
    const [isImageLoading, setIsImageLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [speaking, setSpeaking] = useState(false);

    const handleLanguageChange = (value, mode) => {
        if (mode === 'from') {
            setLanguageFrom(value);
        } else {
            setLanguageTo(value);
        }
    };

    const handleImageCapture = useCallback(async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required', 'Permission to access media library is required!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            const formData = new FormData();
            formData.append('image', {
                uri: result.uri,
                type: 'image/jpeg',
                name: 'photo.jpg',
            });

            try {
                setIsImageLoading(true);
                const data = await uploadImageToTextAPI(formData);
                setIsImageLoading(false);

                if (data && data.length > 0) {
                    setEnteredText(data.map(item => item.text).join(' '));
                } else {
                    console.error('No text detected in the image');
                }
            } catch (error) {
                setIsImageLoading(false);
                console.error('Error:', error.message);
                Alert.alert('Error', 'Failed to upload image. Please try again later.');
            }
        }
    }, []);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            const translation = await TranslateText(enteredText, languageFrom, languageTo);
            if (!translation) {
                setResultText("");
                return;
            }
            setResultText(translation);
            setIsLoading(false);
        } catch (error) {
            console.error('Error translating text:', error);
            setIsLoading(false);
            Alert.alert('Error', 'Failed to translate text. Please try again later.');
        }
    }, [enteredText, languageFrom, languageTo]);

    const speakText = useCallback(() => {
        if (speaking) {
            Speech.stop();
            setSpeaking(false);
        } else {
            Speech.speak(resultText, {
                language: languageTo,
                onStart: () => setSpeaking(true),
                onDone: () => setSpeaking(false),
                onError: () => setSpeaking(false),
            });
        }
    }, [resultText, languageTo, speaking]);

    return (
        <View style={styles.container}>
            <View style={styles.languagePickerContainer}>
                <Text>Translate From: </Text>
                <Picker
                    selectedValue={languageFrom}
                    style={styles.picker}
                    onValueChange={(value) => handleLanguageChange(value, 'from')}>
                    {Object.entries(supportedLanguages).map(([key, value]) => (
                        <Picker.Item label={value} value={key} key={key} />
                    ))}
                </Picker>
            </View>
            <View style={styles.languagePickerContainer}>
                <Text>Translate To: </Text>
                <Picker
                    selectedValue={languageTo}
                    style={styles.picker}
                    onValueChange={(value) => handleLanguageChange(value, 'to')}>
                    {Object.entries(supportedLanguages).map(([key, value]) => (
                        <Picker.Item label={value} value={key} key={key} />
                    ))}
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.textInput}>{enteredText}</Text>
                <TouchableOpacity onPress={handleImageCapture} style={styles.iconContainer}>
                    {isImageLoading ? (
                        <ActivityIndicator size="small" color={colors.primary} />
                    ) : (
                        <Ionicons name="camera" size={24} color="black" />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={isLoading ? undefined : onSubmit}
                    disabled={enteredText === ""}
                    style={styles.iconContainer}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color={colors.primary} />
                    ) : (
                        <Ionicons
                            name="arrow-forward-circle-sharp"
                            size={24}
                            color={enteredText !== "" ? colors.primary : colors.primaryDisabled}
                        />
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{resultText}</Text>
                <TouchableOpacity
                    onPress={speakText}
                    disabled={resultText === ""}
                    style={styles.iconContainer}>
                    <AntDesign name={speaking ? "pausecircle" : "sound"} size={24}
                        color={resultText !== "" ? colors.textColor : colors.textColorDisabled}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    languagePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    picker: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        padding: 10,
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        color: colors.textColor,
    },
    iconContainer: {
        marginHorizontal: 5,
    },
    resultContainer: {
        marginTop: 20,
        padding: 10,
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 5,
    },
    resultText: {
        fontFamily: 'regular',
        letterSpacing: 0.3,
        color: colors.primary,
    },
});

export default TranslateImageText;
