
import axios from 'axios';

const API_URL = 'http://localhost:8082/api/vacations';

export const registrarVacacion = async (nuevaVacacion) => {
    try {
        const response = await axios.post(API_URL, nuevaVacacion);
        return response.data;
    } catch (error) {
        console.error('Error al registar vacaciones:', error);
        throw error;
    }
};

