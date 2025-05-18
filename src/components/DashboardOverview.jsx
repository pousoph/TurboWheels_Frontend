import '../styles/DashboardOverview.css';
import { Users, FileText, BadgeDollarSign, AlertTriangle, Bell } from 'lucide-react';

export const DashboardOverview = () => {

    return (
        <div className="dashboard-overview">
            <h1>Resumen general de Nómina</h1>
            <br/>

            <div className="stats-cards">
                <div className="stat-card">
                    <Users className="icon" />
                    <h3>Empleados activos</h3>
                    <p>132</p>
                </div>
                <div className="stat-card">
                    <FileText className="icon" />
                    <h3>Nóminas generadas</h3>
                    <p>24</p>
                </div>
                <div className="stat-card">
                    <BadgeDollarSign className="icon" />
                    <h3>Nóminas pagadas</h3>
                    <p>22</p>
                </div>
                <div className="stat-card">
                    <AlertTriangle className="icon" />
                    <h3>Alertas activas</h3>
                    <p>2</p>
                </div>
            </div>

            <div className="notifications">
                <h2><Bell className="icon" /> Notificaciones recientes</h2>
                <ul>
                    <li>Se generó la nómina de abril con 132 empleados.</li>
                    <li>Hay 2 pagos pendientes por verificar.</li>
                    <li>3 empleados solicitaron vacaciones esta semana.</li>
                </ul>
            </div>
        </div>
    );
};
