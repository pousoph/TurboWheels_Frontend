import { Sidebar } from '../components/Sidebar.jsx';
import '../styles/Dashboard.css';

export const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-content">
                <h1>¡Bienvenido al Panel de Nómina de TurboWheels!</h1>
                <p>Selecciona un módulo desde el menú lateral para comenzar.</p>
            </main>
        </div>
    );
};
