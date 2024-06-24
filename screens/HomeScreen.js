import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons, FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';
import colors from '../Utils/colors';
import { LinearGradient } from 'expo-linear-gradient';

const translationIcons = [
    <MaterialIcons name="translate" size={50} color="#3f51b5" key="translate" />,
    <FontAwesome5 name="language" size={50} color="#3f51b5" key="language" />,
    <Entypo name="language" size={50} color="#3f51b5" key="entypo-language" />,
    <Ionicons name="language-outline" size={50} color="#3f51b5" key="ionicons-language" />
];

export default function HomeScreen({ navigation }) {
    const [translationIcon, setTranslationIcon] = useState(translationIcons[0]);

    useEffect(() => {
        const updateIcon = () => {
            const randomIndex = Math.floor(Math.random() * translationIcons.length);
            setTranslationIcon(translationIcons[randomIndex]);
        };

        updateIcon(); // Initial icon setup
        const intervalId = setInterval(updateIcon, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const handleImageCapture = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required', 'Permission to access the camera roll is required!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result) {
            // Handle case when result is null (e.g., user cancels image selection)
            console.log('Image selection cancelled or failed.');
            return;
        }

        if (!result.cancelled) {
            try {
                setIsImageLoading(true);
                const formData = new FormData();
                formData.append('image', {
                    uri: result.assets[0].uri,
                    type: 'image/jpeg',
                    name: 'photo.jpg',
                });

                const response = await uploadImageToTextAPI(formData);
                setIsImageLoading(false);

                if (response && response.length > 0) {
                    console.log(response);
                } else {
                    console.error('No text detected in the image');
                }
            } catch (error) {
                setIsImageLoading(false);
                console.error('Error processing image:', error.message);
            }
        }
    };


    const goToTranslationScreen = () => {
        navigation.navigate('translation');
    };

    const goToGuidanceScreen = () => {
        navigation.navigate('guidance');
    };

    const goToVoiceTranslationScreen = () => {
        navigation.navigate('voice');
    };

    const goToImageTranslationScreen = () => {
        navigation.navigate('image');
    };

    const goToMapScreen = () => {
        navigation.navigate('maps');
    };

    return (
        <LinearGradient
        colors={['#d4e6f1', '#a9cce3']} 
            style={styles.container}
        >
            <View style={styles.topSection}>
                <TouchableOpacity
                    style={styles.fakeInputContainer}
                    onPress={goToTranslationScreen}
                    accessibilityLabel="Select Languages"
                >
                    <Text style={styles.fakeInputText}>Select Languages</Text>
                </TouchableOpacity>
                {translationIcon && (
                    <Animatable.View animation="bounceIn" duration={1500}>
                        <TouchableOpacity
                            onPress={goToTranslationScreen}
                            style={styles.translationIcon}
                            accessibilityLabel="Translation Icon"
                        >
                            {translationIcon}
                        </TouchableOpacity>
                    </Animatable.View>
                )}
            </View>

            <View style={styles.section}>
                <Animatable.View
                    animation="bounceInDown"
                    duration={1000}
                    style={styles.titleContainer}
                >
                    <Text style={styles.title}>Welcome to ULT</Text>
                </Animatable.View>
            </View>

            <View style={styles.newSection}>
                <Animatable.View animation="bounceInLeft" duration={1000} style={styles.optionContainer}>
                    <TouchableOpacity
                        onPress={goToTranslationScreen}
                        style={styles.option}
                        accessibilityLabel="Translation"
                    >
                        <View style={styles.iconContainer}>
                            <Ionicons name="image" size={50} color="#3f51b5" key="ionicons-language" />
                        </View>
                        <Text style={styles.optionText}>Text/Image Translation</Text>
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View animation="bounceInRight" duration={1000} style={styles.optionContainer}>
                    <TouchableOpacity
                        onPress={goToVoiceTranslationScreen}
                        style={styles.option}
                        accessibilityLabel="Voice-to-Voice Translation"
                    >
                        <View style={styles.iconContainer}>
                            <Ionicons name="mic-outline" size={50} color="#3f51b5" />
                        </View>
                        <Text style={styles.optionText}>Voice Translation</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>

            <Animatable.View animation="fadeInUp" duration={1000} delay={500} style={styles.buttonColumn}>
                <Button
                    mode="outlined"
                    onPress={goToTranslationScreen}
                    style={styles.outlinedButton}
                    labelStyle={styles.optionText}
                    icon={({ color, size }) => (
                        <MaterialIcons name="translate" size={size} color={color} />
                    )}
                >
                    Translation
                </Button>
                {/* <Button
                    mode="outlined"
                    onPress={goToMapScreen}
                    style={styles.outlinedButton}
                    labelStyle={styles.optionText}
                    icon={({ color, size }) => (
                        <MaterialIcons name="map" size={size} color={color} />
                    )}
                >
                    Maps
                </Button> */}
                <Button
                    mode="outlined"
                    onPress={goToGuidanceScreen}
                    style={styles.outlinedButton}
                    labelStyle={styles.optionText}
                    icon={({ color, size }) => (
                        <MaterialIcons name="directions-walk" size={size} color={color} />
                    )}
                >
                    Hajj/Umrah Guidance
                </Button>
            </Animatable.View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    fakeInputContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.greyBackground,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 10,
        // Shadow properties for iOS
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        // Elevation for Android
        elevation: 5,
    },
    fakeInputText: {
        fontSize: 16,
        color: colors.primary,
    },
    translationIcon: {
        backgroundColor: colors.greyBackground,
        borderRadius: 25,
        padding: 10,
        // Shadow properties for iOS
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        // Elevation for Android
        elevation: 5,
    },
    section: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
    },
    newSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    optionContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    option: {
        padding: 20,
        backgroundColor: colors.greyBackground,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        // Shadow properties for iOS
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        // Elevation for Android
        elevation: 5,
    },
    iconContainer: {
        marginBottom: 10,
    },
    optionText: {
        fontSize: 16,
        color: colors.primary,
        textAlign: 'center',
    },
    buttonColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginTop: 20,
    },
    outlinedButton: {
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 30,
        width: '100%',
        marginVertical: 10,
    },
});
