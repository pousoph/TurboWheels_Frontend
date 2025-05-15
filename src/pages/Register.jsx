// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";
import "../styles/Register.css";
import { User, Mail, Lock, Calendar, IdCard } from "lucide-react";

export const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        documento: "",
        edad: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await registerUser(formData);
            setSuccess(true);
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setError("Error al registrar. Verifica los datos.");
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Registro de Usuario</h2>

                <div className="input-group">
                    <User className="icon" />
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <User className="icon" />
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <IdCard className="icon" />
                    <input
                        type="text"
                        name="documento"
                        placeholder="Documento"
                        value={formData.documento}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <Calendar className="icon" />
                    <input
                        type="number"
                        name="edad"
                        placeholder="Edad"
                        value={formData.edad}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <Mail className="icon" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <Lock className="icon" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && <p className="error">{error}</p>}
                {success && <p className="success">¡Registro exitoso!</p>}

                <button type="submit" className="register-btn">
                    Registrarse
                </button>
                <button
                    type="button"
                    className="login-redirect"
                    onClick={() => navigate("/login")}
                >
                    ¿Ya tienes cuenta? Inicia sesión
                </button>
            </form>
        </div>
    );
};
