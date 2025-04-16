import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import {
    Users,
    Wallet,
    Hospital,
    Package,
    ReceiptText,
    PlaneTakeoff,
    Stethoscope
} from 'lucide-react';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>TurboWheels</h2>
            <nav className="sidebar-menu">
                <Link to="/dashboard/employees"><Users size={20} /> Lista de Empleados</Link>
                <Link to="/dashboard/nomina"><Wallet size={20} /> Liquidación de Nómina</Link>
                <Link to="/dashboard/seguridad-social"><Hospital size={20} /> Seguridad Social</Link>
                <Link to="/dashboard/cesantias"><Package size={20} /> Cesantías</Link>
                <Link to="/dashboard/liquidacion-definitiva"><ReceiptText size={20} /> Liquidación Definitiva</Link>
                <Link to="/dashboard/vacaciones"><PlaneTakeoff size={20} /> Vacaciones</Link>
                <Link to="/dashboard/incapacidades"><Stethoscope size={20} /> Incapacidades y Licencias</Link>
            </nav>
        </aside>
    );
};
