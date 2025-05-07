import axios from 'axios';

const API_URL = 'http://localhost:8082/api/cesantia';

export const createCesantia = async ({ payrollId, valor }) => {
    const dto = { valor }; // solo mandamos 'valor' en el body
    const response = await axios.post(`${API_URL}/${payrollId}`, dto);
    return response.data;
};
