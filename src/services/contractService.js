// src/services/contractService.js
import axios from 'axios';

const API_URL = 'http://localhost:8082/api/contracts';

export const getContratos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener contratos:', error);
        return [];
    }
};

export const createContrato = async (nuevoContrato) => {
    try {
        const response = await axios.post(API_URL, nuevoContrato);
        return response.data;
    } catch (error) {
        console.error('Error al crear contrato:', error);
        throw error;
    }
};

export const deleteContrato = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar contrato:', error);
        throw error;
    }
};

export const getContratoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`); // ← ID del contrato
        return response.data;
    } catch (error) {
        console.error('Error al obtener contrato:', error);
        throw error;
    }
};

// Actualización por employeeId usando query params
export const updateContrato = async (employeeId, contratoActualizado) => {
    const { tipo, fechaInicio, fechaFin, salario } = contratoActualizado;
    try {
        await axios.put(`${API_URL}/actualizar`, null, {
            params: {
                empleadoId: employeeId,
                tipoContrato: tipo,
                fechaInicio,
                fechaFin,
                salario
            }
        });
    } catch (error) {
        console.error('Error al actualizar contrato:', error);
        throw error;
    }
};

