import axios from 'axios';

const API_URL = 'http://localhost:8082/api/final-settlement';

export const getLiquidaciones = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener liquidaciones:', error);
        return [];
    }
};

export const crearLiquidacion = async ({ id, fechaFinal }) => {
    await axios.post(`${API_URL}/${id}`, { fechaFinal });
};