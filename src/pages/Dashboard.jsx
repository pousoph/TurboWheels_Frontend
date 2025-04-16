import { Sidebar } from '../components/Sidebar.jsx';
import { DashboardOverview } from '../components/DashboardOverview.jsx';
import { EmployeeList } from '../components/EmployeeList.jsx'; // Nuevo
import { Routes, Route } from 'react-router-dom';
import '../styles/Dashboard.css';

export const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-content">
                <Routes>
                    <Route path="/" element={<DashboardOverview />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    {/* Agrega más rutas según los módulos futuros */}
                </Routes>
            </main>
        </div>
    );
};
