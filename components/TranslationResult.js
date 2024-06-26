import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import colors from '../Utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setSavedItems } from '../store/savedItemsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';

const TranslationResult = (props) => {
    const dispatch = useDispatch();
    const { itemId } = props;
    const item = useSelector((state) => {
        return (
            state.history.items.find((item) => item.id === itemId) ||
            state.savedItems.items.find((item) => item.id === itemId)
        );
    });
    const savedItems = useSelector((state) => state.savedItems.items);
    const isSaved = savedItems.some((i) => i.id === itemId);
    const starIcon = isSaved ? 'star' : 'star-outlined';

    const [speaking, setSpeaking] = useState(false);

    const starredItem = useCallback(async () => {
        let newSavedItems;

        if (isSaved) {
            newSavedItems = savedItems.filter((i) => i.id !== itemId);
        } else {
            newSavedItems = [...savedItems, item];
        }
        await AsyncStorage.setItem('savedItems', JSON.stringify(newSavedItems));
        dispatch(setSavedItems({ items: newSavedItems }));
    }, [dispatch, savedItems, isSaved, item, itemId]);

    const speakTranslation = useCallback(() => {
        setSpeaking(!speaking);
        if (speaking) {
            Speech.stop();
        } else {
            Speech.speak(item.translation, {
                onStart: () => setSpeaking(true),
                onDone: () => setSpeaking(false),
                onError: () => setSpeaking(false),
            });
        }
    }, [speaking, item.translation]);

    if (!item) return null;

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={4}>
                    {item.originalText}
                </Text>
                <Text style={styles.subTitle} numberOfLines={4}>
                    {item.translation}
                </Text>
            </View>

            <TouchableOpacity onPress={starredItem} style={styles.iconContainer}>
                <Entypo name={starIcon} size={24} color={colors.subTextColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={speakTranslation} style={styles.iconContainer}>
                <MaterialIcons name={speaking ? 'pause-circle' : 'volume-up'} size={24} color={colors.subTextColor} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        borderColor: colors.lightGrey,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderTopWidth: 0,
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    title: {
        fontFamily: 'medium',
        letterSpacing: 0.3,
        color: colors.textColor,
    },
    subTitle: {
        fontFamily: 'regular',
        letterSpacing: 0.3,
        color: colors.subTextColor,
        fontSize: 13,
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TranslationResult;
