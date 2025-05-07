import axios from 'axios';

const API_URL = 'http://localhost:8082/api/deductions';

export const getDeductions = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener deducciones:', error);
        return [];
    }
};

export const crearDeductions = async (nuevoDeductions) => {
    await axios.post(API_URL, nuevoDeductions);
};
