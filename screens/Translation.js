import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity, View, TextInput, ActivityIndicator, Platform, Alert } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import colors from '../Utils/colors';
import supportedLanguages from '../Utils/supportedLanguages';
import TranslateText from '../Service/languageTranslation.service';
import TranslationResult from '../components/TranslationResult';
import { addHistoryItem, setHistoryItems } from '../store/historySlice';
import { setSavedItems } from '../store/savedItemsSlice';
import { uploadImageToTextAPI } from '../Service/uploadImageToText.service';
import transcribeAudio from '../Service/voiceToText.service';
import VoiceToVoiceScreen from './VoiceTovoice';


export default function TranslateScreen(props) {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history.items);
    const [enteredText, setEnteredText] = useState("");
    const [resultText, setResultText] = useState("");
    const [languageTo, setLanguageTo] = useState("fr");
    const [languageFrom, setLanguageFrom] = useState("auto");
    const [isLoading, setIsLoading] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(false);
    const [recording, setRecording] = useState(null);
    const [recordedFilePath, setRecordedFilePath] = useState('');
    const params = props.route.params || {};
    const [speaking, setSpeaking] = useState(false);
    const [speakingInput, setInputSpeaking] = useState(false);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const historyString = await AsyncStorage.getItem('history');
                if (historyString !== null) {
                    const history = JSON.parse(historyString);
                    dispatch(setHistoryItems({ items: history }));
                }

                const savedItemsString = await AsyncStorage.getItem('savedItems');
                if (savedItemsString !== null) {
                    const savedItems = JSON.parse(savedItemsString);
                    dispatch(setSavedItems({ items: savedItems }));
                }
            } catch (error) {
                Alert.alert('Error loading data');
                console.error('Error loading data:', error);
            }
        };

        loadData();
    }, [dispatch]);

    useEffect(() => {
        if (params.languageTo) {
            setLanguageTo(params.languageTo);
        }

        if (params.languageFrom) {
            setLanguageFrom(params.languageFrom);
        }
    }, [params.languageFrom, params.languageTo]);

    useEffect(() => {
        const saveHistory = async () => {
            try {
                await AsyncStorage.setItem('history', JSON.stringify(history));
            } catch (error) {
                Alert.alert("Error Saving History!! ⚠");
                console.log(error);
            }
        }

        saveHistory();
    }, [history]);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
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

            const id = uuid.v4();
            const result = {
                id,
                dateTime: new Date().toISOString(),
                translation,
                originalText: enteredText
            };
            dispatch(addHistoryItem({ item: result }));
            setIsLoading(false);
        } catch (error) {
            Alert.alert('Internet Problem !! ⚠ ');
            console.error('Error translating text:', error);
            setIsLoading(false);
        }
    }, [enteredText, languageFrom, languageTo, dispatch]);

    const copyToClipboard = useCallback(async () => {
        await Clipboard.setStringAsync(resultText);
    }, [resultText]);

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

    const speakInputText = useCallback(() => {
        if (speakingInput) {
            Speech.stop();
            setInputSpeaking(false);
        } else {
            Speech.speak(enteredText, {
                language: languageFrom,
                onStart: () => setInputSpeaking(true),
                onDone: () => setInputSpeaking(false),
                onError: () => setInputSpeaking(false),
            });
        }
    }, [enteredText, languageFrom, speakingInput]);

    const stopSpeaking = useCallback(() => {
        Speech.stop();
    }, []);

    const onArrowClick = () => {
        let swappedLanguages;
        let swappedTexts;

        if (languageFrom === "auto") {
            swappedLanguages = swap("en", languageTo);
        } else {
            swappedLanguages = swap(languageFrom, languageTo);
        }

        if ((enteredText !== "") && (resultText !== "")) {
            swappedTexts = swap(enteredText, resultText);
            setEnteredText(swappedTexts[0]);
            setResultText(swappedTexts[1]);
        }

        setLanguageFrom(swappedLanguages[0]);
        setLanguageTo(swappedLanguages[1]);
    }

    const swap = (a, b) => {
        let temp = a;
        a = b;
        b = temp;
        return [a, b];
    }

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
            await recording.stopAndUnloadAsync();
            const uri = recording.getURI();
            setRecordedFilePath(uri);
            setRecording(null);

            const transcription = await transcribeAudio(uri);
            setEnteredText(transcription.text);
        } catch (err) {
            console.error('Failed to stop recording', err);
            Alert.alert('Error', 'Failed to stop recording. Please try again.');
        }
    };

    const handleImageCapture = useCallback(async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result) {
            Alert.alert('Image selection failed !! ⚠ ');
            console.log('Image selection cancelled or failed.');
            return;
        }

        if (!result.cancelled) {
            const formData = new FormData();
            formData.append('image', {
                uri: result.assets[0].uri,
                type: 'image/jpeg',
                name: 'photo.jpg',
            });
            try {
                setIsImageLoading(true);
                const response = await uploadImageToTextAPI(formData);
                setIsImageLoading(false);

                if (response && response.length > 0) {
                    setEnteredText(response.map(item => item.text).join(' '));
                } else {
                    Alert.alert('No text detected in the image !! ⚠ ');
                    console.error('No text detected in the image');
                }
            } catch (error) {
                setIsImageLoading(false);
                if (error.response) {
                    console.error('Server responded with an error:', error.response.data);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    Alert.alert('Internet Problem !! ⚠ ');
                    console.error('Error:', error.message);
                }
            }
        }
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.languageContainer}>
                    <TouchableOpacity
                        style={styles.languageOption}
                        onPress={() => props.navigation.navigate("languageSelector", { title: "Translate from", selected: languageFrom, mode: 'from' })}>
                        <Text style={styles.languageOptionText}>{supportedLanguages[languageFrom]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.arrowContainer} onPress={() => onArrowClick()} >
                        <FontAwesome6 name="arrow-right-arrow-left" size={20} color={colors.lightGrey} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.languageOption}
                        onPress={() => props.navigation.navigate("languageSelector", { title: "Translate to", selected: languageTo, mode: 'to' })}>
                        <Text style={styles.languageOptionText}>{supportedLanguages[languageTo]}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        multiline
                        placeholder='Enter Text'
                        style={styles.textInput}
                        onChangeText={setEnteredText}
                        value={enteredText}
                    />

                    {(enteredText !== "") && <TouchableOpacity
                        onPress={() => setEnteredText("")}
                        disabled={enteredText === ""}
                        style={styles.iconContainer}>
                        <MaterialIcons name="clear" size={15} color={enteredText !== "" ? colors.textColor : colors.textColorDisabled} />
                    </TouchableOpacity>}
                    <TouchableOpacity
                        onPress={speakInputText}
                        disabled={enteredText === ""}
                        style={styles.iconContainer}>
                        <AntDesign name={speakingInput ? "pausecircle" : "sound"} size={24}
                            color={enteredText !== "" ? colors.textColor : colors.textColorDisabled}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleImageCapture} style={styles.iconContainer}>
                        <Ionicons name="camera" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={recording ? stopRecording : startRecording}
                        style={styles.iconContainer}
                    >
                        <MaterialIcons
                            name={recording ? "stop" : "keyboard-voice"}
                            size={24}
                            color={colors.textColor}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={isLoading ? undefined : onSubmit}
                        disabled={enteredText === ""}
                        style={styles.iconContainer}>
                        {isLoading ? (
                            <ActivityIndicator size={'small'} color={colors.primary} />
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
                    {(resultText !== "") && <TouchableOpacity
                        onPress={() => setResultText("")}
                        disabled={resultText === ""}
                        style={styles.iconContainer}>
                        <MaterialIcons name="clear" size={15} color={resultText !== "" ? colors.textColor : colors.textColorDisabled} />
                    </TouchableOpacity>}
                    <TouchableOpacity
                        onPress={speakText}
                        disabled={resultText === ""}
                        style={styles.iconContainer}>
                        <AntDesign name={speaking ? "pausecircle" : "sound"} size={24}
                            color={resultText !== "" ? colors.textColor : colors.textColorDisabled}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={copyToClipboard}
                        disabled={resultText === ""}
                        style={styles.iconContainer}>
                        <MaterialIcons
                            name="content-copy"
                            size={24}
                            color={resultText !== "" ? colors.textColor : colors.textColorDisabled}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.historyContainer}>
                    <FlatList
                        data={history}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <TranslationResult itemId={item.id} />}
                    />
                </View>
            </View></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loaderContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    languageContainer: {
        flexDirection: 'row',
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
    },
    languageOption: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
    },
    arrowContainer: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    languageOptionText: {
        color: colors.primary,
        fontFamily: 'regular',
        letterSpacing: 0.3,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
    },
    textInput: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontFamily: 'regular',
        letterSpacing: 0.3,
        height: 90,
        color: colors.textColor,
    },
    iconContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultContainer: {
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 90,
        paddingVertical: 15,
    },
    resultText: {
        fontFamily: 'regular',
        letterSpacing: 0.3,
        color: colors.primary,
        flex: 1,
        marginHorizontal: 20,
    },
    historyContainer: {
        backgroundColor: colors.greyBackground,
        flex: 1,
        padding: 10,
    },
});
