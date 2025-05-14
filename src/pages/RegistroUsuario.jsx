import { useState } from 'react';
import '../styles/RegistroUsuario.css';
import { crearUsuario } from '../services/userService.js';
import { useNavigate } from 'react-router-dom';

export const RegistroUsuario = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
        employeeId: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await crearUsuario(form);
            navigate('/login'); // después de registrar, va al login
        } catch (err) {
            console.error('Error al registrar usuario:', err);
            setError('No se pudo registrar el usuario. Verifica los datos.');
        }
    };

    return (
        <div className="registro-container">
            <div className="registro-form">
                <h2>Registro de Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="ejemplo@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

{/*                    <label>ID del Empleado</label>
                    <input
                        type="number"
                        name="employeeId"
                        placeholder="123"
                        value={form.employeeId}
                        onChange={handleChange}
                        required
                    />*/}

                    {error && <p className="error">{error}</p>}

                    <button type="submit" className="btn-registrar">Registrar</button>
                </form>
                <p className="login-link">
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </p>
            </div>
        </div>
    );
};
