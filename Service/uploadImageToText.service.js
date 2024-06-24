import axios from 'axios';

import { environments } from '../Utils/environment';

export const uploadImageToTextAPI = async (formData) => {
    try {
        const response = await axios.post('https://api.api-ninjas.com/v1/imagetotext', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-Api-Key': environments.IMAGE_API_KEY,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};
