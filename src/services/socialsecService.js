import axios from "axios";

const API_URL = 'http://localhost:8082/api/social-security';

export const registrarSeguridad = async (payrollId, dto) => {
    const response = await axios.post(`${API_URL}/${payrollId}`, dto);
    return response.data;
};
