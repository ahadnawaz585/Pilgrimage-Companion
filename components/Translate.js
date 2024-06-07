// Translator.js
import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, StyleSheet, View } from 'react-native';
import translateText from '../Service/languageTranslation.service';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('es');

  const handleTranslate = async () => {
    const translation = await translateText(inputText, targetLang);
    setTranslatedText(translation);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text to translate"
        value={inputText}
        onChangeText={setInputText}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter target language code (e.g., 'es' for Spanish)"
        value={targetLang}
        onChangeText={setTargetLang}
      />
      <Button title="Translate" onPress={handleTranslate} />
      <View style={styles.translationContainer}>
        <Text style={styles.translatedText}>{translatedText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  translationContainer: {
    marginTop: 20,
  },
  translatedText: {
    fontSize: 18,
    color: 'black',
  },
});

export default Translator;
