import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, ActivityIndicator, Alert, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import { useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';
import colors from '../Utils/colors';
import TranslateText from '../Service/languageTranslation.service';
import transcribeAudio from '../Service/voiceToText.service';
import { addHistoryItem } from '../store/historySlice';
import supportedLanguages from '../Utils/supportedLanguages';
import MessageReminder from '../components/MessageReminder';

export default function VoiceToVoiceScreen() {
    const dispatch = useDispatch();
    const [recording, setRecording] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [languageTo, setLanguageTo] = useState("fr");
    const [languageFrom, setLanguageFrom] = useState("auto");
    const [translatedText, setTranslatedText] = useState('');
    const [reminderMessage, setReminderMessage] = useState('');

    useEffect(() => {
        const translateAndSpeak = async () => {
            try {
                if (translatedText !== "") {
                    const translation = await TranslateText(translatedText, languageFrom, languageTo);
                    if (translation) {
                        await Speech.speak(translation, {
                            language: languageTo,
                            onStart: () => setSpeaking(true),
                            onDone: () => setSpeaking(false),
                            onError: () => setSpeaking(false),
                        });

                        const id = uuid.v4();
                        const result = {
                            id,
                            dateTime: new Date().toISOString(),
                            translation,
                            originalText: translatedText,
                        };
                        dispatch(addHistoryItem({ item: result }));
                    }
                }
            } catch (error) {
                console.error('Error speaking translated text:', error);
                Alert.alert('Error', 'Internet problem. Please check your connection and try again.');
            }
        };

        translateAndSpeak();

        return () => {
            Speech.stop();
        };
    }, [translatedText, languageTo]);

    const startRecording = async () => {
        try {
            const permission = await Audio.requestPermissionsAsync();
            if (permission.status !== 'granted') {
                Alert.alert('Permission required', 'Permission to access microphone is required!');
                return;
            }
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
            setRecording(recording);
        } catch (err) {
            console.error('Failed to start recording', err);
            Alert.alert('Error', 'Failed to start recording. Please try again.');
        }
    };

    const stopRecording = async () => {
        try {
            setIsLoading(true);
            await recording.stopAndUnloadAsync();
            const uri = recording.getURI();
            setRecording(null);
            setReminderMessage("Transcribing....");
            const transcription = await transcribeAudio(uri);
            setReminderMessage("Translating....");
            const translatedText = await TranslateText(transcription.text, languageFrom, languageTo);
            setReminderMessage("Just Finished....");
            if (translatedText) {
                setTranslatedText(translatedText);
                // await Speech.speak(translatedText, {
                    //     language: languageTo,
                    //     onStart: () => setSpeaking(true),
                    //     onDone: () => setSpeaking(false),
                    //     onError: () => setSpeaking(false),
                    // });
                    const id = uuid.v4();
                const result = {
                    id,
                    dateTime: new Date().toISOString(),
                    translation: translatedText,
                    originalText: transcription.text,
                };
                dispatch(addHistoryItem({ item: result }));
                setReminderMessage("");
            }
            setIsLoading(false);
        } catch (err) {
            console.error('Failed to stop recording', err);
            setIsLoading(false);
            Alert.alert('Error', 'Internet problem. Please check your connection and try again.');
        }
    };

    const handleMicPress = () => {
        if (recording) {
            setReminderMessage("Stopped Speaking");
            stopRecording();
        } else {
            setReminderMessage("Start Speaking");
            startRecording();
        }
        
    };

    const stopSpeaking = useCallback(() => {
        Speech.stop();
        setSpeaking(false);
    }, []);

    const playTranslatedText = async () => {
        if (translatedText) {
            try {
                await Speech.speak(translatedText, {
                    language: languageTo,
                    onStart: () => setSpeaking(true),
                    onDone: () => setSpeaking(false),
                    onError: () => setSpeaking(false),
                });
            } catch (error) {
                console.error('Error playing translated text:', error);
                Alert.alert('Error', 'Failed to play translated text. Please try again.');
            }
        }
    };

    const languageOptions = Object.keys(supportedLanguages).map(key => ({ label: supportedLanguages[key], value: key }));

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.header}>Voice Translator</Text>

                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerText}>From :</Text>
                    <Picker
                        selectedValue={languageFrom}
                        style={styles.picker}
                        onValueChange={(itemValue) => setLanguageFrom(itemValue)}
                    >
                        {languageOptions.map((option) => (
                            <Picker.Item label={option.label} value={option.value} key={option.value} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerText}>To :</Text>
                    <Picker
                        selectedValue={languageTo}
                        style={styles.picker}
                        onValueChange={(itemValue) => setLanguageTo(itemValue)}
                    >
                        {languageOptions.map((option) => option.value !== 'auto' && (
                            <Picker.Item label={option.label} value={option.value} key={option.value} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.voiceContainer}>
                    <TouchableOpacity onPress={handleMicPress} style={styles.micContainer}>
                        {isLoading ? (
                            <ActivityIndicator size="large" color={colors.primary} />
                        ) : (
                            <MaterialIcons name={recording ? "stop" : "keyboard-voice"} size={80} color={colors.primary} />
                        )}
                    </TouchableOpacity>

                    {speaking ? (
                        <TouchableOpacity disabled onPress={stopSpeaking} style={styles.stopContainer}>
                            <AntDesign name="pausecircle" size={80} color={colors.primary} />
                        </TouchableOpacity>
                    ) : (
                        translatedText && (
                            <TouchableOpacity onPress={playTranslatedText} style={styles.playContainer}>
                                <AntDesign name="play" size={80} color={colors.primary} />
                            </TouchableOpacity>
                        )
                    )}
                </View>
            </ScrollView>
            {translatedText !== "" && (
                <TouchableOpacity onPress={() => setTranslatedText('')} style={styles.resetButton}>
                    <AntDesign name="closecircleo" size={40} color={colors.primary} />
                </TouchableOpacity>
            )}

            {reminderMessage !== "" && (
                <MessageReminder message={reminderMessage} onClose={() => setReminderMessage('')} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        padding: 16,
    },
    voiceContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'space-between'
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
        color: colors.primary,
    },
    pickerText: {
        color: colors.primary,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    pickerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // gap : 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        // padding: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    picker: {
        height: 50,
        width: '90%',
    },
    micContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    stopContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    playContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    resetButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'transparent',
        // borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 20,
        padding: 10,
    },
});
