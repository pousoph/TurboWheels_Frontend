import { Sidebar } from '../components/Sidebar.jsx';
import { DashboardOverview } from '../components/DashboardOverview.jsx';
import '../styles/Dashboard.css';

export const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-content">
                <DashboardOverview />
            </main>
        </div>
    );
};
