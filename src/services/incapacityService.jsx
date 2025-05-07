// src/services/contractService.js
import axios from 'axios';

const API_URL = 'http://localhost:8082/api/incapacities';

export const createIncapacidad = async (nuevaIncapacidad) => {
    try {
        const response = await axios.post(API_URL, nuevaIncapacidad);
        return response.data;
    } catch (error) {
        console.error('Error al crear incapacidades:', error);
        throw error;
    }
};

