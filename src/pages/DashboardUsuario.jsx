import { SidebarEmpleado } from '../components/SidebarEmpleado.jsx';
import { Routes, Route } from 'react-router-dom';
import '../styles/Dashboard.css';
import { DashboardUsuarioOverview } from '../components/DashboardEmpleadoOverview.jsx';
import {ContractEmpleado} from "../components/ContractEmpleado.jsx";

export const DashboardUsuario = () => {
    return (
        <div className="dashboard-layout">
            <SidebarEmpleado />
            <main className="dashboard-content">
                <Routes>
                    <Route path="/" element={<DashboardUsuarioOverview />} />
                </Routes>
            </main>
        </div>
    );
};
