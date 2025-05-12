import axios from 'axios';

const API_URL = 'http://localhost:8082/api/eps';

export const getAllEPS = async () => {
    try {
        const response = await axios.get(API_URL);
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error("Error al obtener EPS:", error);
        return [];
    }
};

export const createEPS = async (nombre) => {
    await axios.post(API_URL, null, {
        params: { nombre }
    });
};

export const deleteEPS = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar EPS:', error);
        throw error;
    }
};