import './LoginPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const tempErrors = {};
        if (!email) tempErrors.email = 'El correo es obligatorio';
        else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = 'Correo no válido';

        if (!password) tempErrors.password = 'La contraseña es obligatoria';
        else if (password.length < 6) tempErrors.password = 'Mínimo 6 caracteres';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('✅ Validado correctamente (simulación)');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Iniciar sesión</h2>

                <div className="input-group">
                    <label htmlFor="email" title="Tu correo corporativo o personal registrado">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="correo@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <small className="error-text">{errors.email}</small>}
                </div>

                <div className="input-group">
                    <label htmlFor="password" title="Mínimo 6 caracteres">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <small className="error-text">{errors.password}</small>}
                </div>

                <button type="submit" className="login-btn">Ingresar</button>
            </form>
        </div>
    );
};
