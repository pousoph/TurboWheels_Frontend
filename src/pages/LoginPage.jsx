// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import "../styles/LoginPage.css";
import userService from "../services/userService";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        // Caso Admin (Hardcoded)
        if (email === "admin@turbowheels.com" && pass === "admin123") {
            navigate("/dashboard");
            return;
        }

        // Caso Usuario normal
        try {
            const user = await userService.login(email, pass);
            localStorage.setItem("usuario", JSON.stringify(user)); // <--- clave corregida
            navigate(`/usuario/${user.id}`);
        } catch (err) {
            setError("Correo o contraseña inválidos");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-title">Iniciar Sesión</h2>

                <div className="input-group">
                    <Mail className="icon" />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <Lock className="icon" />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit" className="btn-login">Entrar</button>

                <p className="register-link">
                    ¿No tienes cuenta?{" "}
                    <span onClick={() => navigate("/registro")}>Regístrate</span>
                </p>
            </form>
        </div>
    );
};
