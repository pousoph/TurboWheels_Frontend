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

export const createDeduction = async (nuevoDeduction) => {
    try {
        const response = await axios.post(API_URL, nuevoDeduction);
        return response.data;
    } catch (error) {
        console.error('Error al crear la deduccion:', error);
        throw error;
    }
};