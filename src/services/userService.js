import axios from 'axios';

const API_URL = 'http://localhost:8082/api/usuarios';

export const loginUser = async (email, pass) => {
    const response = await axios.post(`${API_URL}/login`, null, {
        params: { email, pass }
    });
    return response.data;
};
export const crearUsuario = async (usuario) => {
    const response = await axios.post(API_URL, usuario);
    return response.data;
}
export const getUsuarioPorId = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
};