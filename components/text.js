import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceTranscriptionComponent = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
      setTranscription('');
    } catch (error) {
      console.error('Error starting speech recognition', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Error stopping speech recognition', error);
    }
  };

  const onSpeechResults = (event) => {
    setTranscription(event.value[0]);
  };

  return (
    <View>
      <Text>{transcription}</Text>
      <Button title={isListening ? 'Stop Listening' : 'Start Listening'} onPress={isListening ? stopListening : startListening} />
    </View>
  );
};

export default VoiceTranscriptionComponent;
