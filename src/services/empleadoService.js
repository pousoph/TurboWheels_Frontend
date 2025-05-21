import axios from 'axios';

const API_URL = 'http://localhost:8082/api/employees';

export const getEmpleados = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        return [];
    }
};

export const crearEmpleado = async (nuevoEmpleado) => {
    await axios.post(API_URL, nuevoEmpleado);
};


export const deleteEmpleado = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
