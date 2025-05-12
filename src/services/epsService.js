// src/components/EPS/epsService.js
import axios from 'axios';

const API_URL = 'http://localhost:8082/api/eps';

export const getAllEPS = async () => {
    try {
        const response = await axios.get(API_URL);
        return Array.isArray(response.data) ? response.data : []; // ✅ protección adicional
    } catch (error) {
        console.error("Error al obtener EPS:", error);
        return [];
    }
};

export const createEPS = (nombre) =>
    axios.post(`${API_URL}?nombre=${encodeURIComponent(nombre)}`);

export const deleteEPS = (id) => axios.delete(`${API_URL}/${id}`);
