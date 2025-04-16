import '../styles/LoginPage.css';

export const LoginPage = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Iniciar sesión</h2>

                <div className="input-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" placeholder="correo@empresa.com" required />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="••••••••" required />
                </div>

                <button type="submit" className="login-btn">Ingresar</button>
            </form>
        </div>
    );
};
