// src/services/userService.js
import axios from "axios";

const API_URL = "http://localhost:8082/api/usuarios";

const login = async (email, pass) => {
    const response = await fetch(`${API_URL}/login?email=${email}&pass=${pass}`, {
        method: "POST"
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
};

export const registerUser = async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
};

const userService = {
    login,
};

export default userService;
