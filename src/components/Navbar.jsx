import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="TurboWheels Logo" />
            </div>
            <ul className="navbar-links">
                <Link to="/login">
                    <button className="login-btn">Iniciar Sesión</button>
                </Link>
            </ul>
        </nav>
    );
};
