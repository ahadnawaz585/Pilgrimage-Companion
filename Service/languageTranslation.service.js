import axios from 'axios';

const translateText = async (text, sourceLang, targetLang) => {

  try {
    const response = await axios.get(`https://lingva.ml/api/v1/${sourceLang}/${targetLang}/${encodeURIComponent(text)}`);
    // console.log(response);
    return response.data.translation;
  } catch (error) {
    console.error('Error translating text:', error);
    return null;
  }
};

export default translateText;
