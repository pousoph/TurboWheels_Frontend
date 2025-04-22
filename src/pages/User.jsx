import { Sidebar } from '../components/Sidebar.jsx';
import '../styles/User.css';

export const User = () => {
    return (
        <div className="user-container">
            <Sidebar />
            <main className="user-main">
                <h1 className="user-title">Gestión de Usuarios</h1>
            </main>
        </div>
    );
};
