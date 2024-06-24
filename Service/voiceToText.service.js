import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { environments } from '../Utils/environment';

const transcribeAudio = async (audioFilePath) => {

  try {
    const fileInfo = await FileSystem.getInfoAsync(audioFilePath);

    if (!fileInfo.exists) {
      throw new Error('File does not exist');
    }

    const fileUri = fileInfo.uri;

    const formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      name: 'audio.m4a',
      type: 'audio/m4a'
    });
    formData.append('model', 'whisper-1');
    formData.append('response_format', 'json');

    
    const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, {
      headers: {
        'Authorization': `Bearer ${environments.OPENAI_API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error during audio transcription:', error);
    throw error;
  }
};

export default transcribeAudio;
