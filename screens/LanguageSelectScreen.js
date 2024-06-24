import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import supportedLanguages from '../Utils/supportedLanguages';
import languageItem from '../components/LanguageItem';

export default function LanguageSelectScreen({ navigation, route }) {
    const params = route.params || {};
    const { title, selected } = params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: title
        });
    }, [navigation, title]);

    const onLanguageSelect = useCallback(itemKey => {
        const dataKey = params.mode === 'to' ? 'languageTo' : 'languageFrom';
        navigation.navigate("translation", { [dataKey]: itemKey });
    }, [params, navigation]);

    const languagesList = Object.keys(supportedLanguages).filter(languageKey => {
        if (params.mode === 'to' && languageKey === 'auto') {
            return false;
        }
        return true;
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={languagesList}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    const languageKey = item;
                    const languageString = supportedLanguages[languageKey];
                    return (
                        <LanguageItem
                            onPress={() => onLanguageSelect(languageKey)}
                            text={languageString}
                            selected={languageKey === selected}
                        />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
