import { useState } from 'react';
import { loginUser } from '../services/userService.js';
import '../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(email, pass);

            if (email === 'admin@turbowheels.com' && pass === '*x-K97S2') {
                alert("Bienvenido Administrador");
                navigate('/dashboard');
            } else {
                alert("Bienvenido Empleado");
                navigate('/usuario/' + user.id);
            }
        } catch (error) {
            console.error("Error en login:", error);
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                <button type="submit">Ingresar</button>
                <p className="register-text">
                    ¿No tienes cuenta?
                    <span className="register-link" onClick={() => navigate('/registro')}> Regístrate</span>
                </p>
            </form>
        </div>
    );
};