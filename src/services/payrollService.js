// src/services/payrollService.js
import axios from 'axios';

const API_URL = 'http://localhost:8082/api/payrolls';

export const getPayrolls = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getTotalPayroll = async () => {
    const response = await axios.get(`${API_URL}/calcularnominatotal`);
    return response.data;
};

export const createPayroll = async (contractId) => {
    const dto = { contractId };
    const response = await axios.post(API_URL, dto);
    return response.data;
};

export const deletePayroll = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
