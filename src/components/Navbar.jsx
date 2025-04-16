import '../styles/Navbar.css';
import logo from '../assets/logo.png';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="TurboWheels Logo" />
            </div>
            <ul className="navbar-links">
                <button className="login-btn">Iniciar Sesión</button>
            </ul>
        </nav>
    );
};
