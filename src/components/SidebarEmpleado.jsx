import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo-intento.png';
import {
    BadgeDollarSign,
    FileText,
    SquareBottomDashedScissors,
    UserCog,
    LayoutDashboard,
    LogOut,
} from 'lucide-react';

export const SidebarEmpleado = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        navigate("/login");
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="TurboWheels Logo" />
            </div>
            <nav className="sidebar-menu">
                <button onClick={handleLogout} className="logout-link">
                    <LogOut size={20} /> Cerrar sesión
                </button>
            </nav>
        </aside>
    );
};
