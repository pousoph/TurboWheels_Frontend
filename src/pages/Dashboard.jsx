import { Sidebar } from '../components/Sidebar.jsx';
import { DashboardOverview } from '../components/DashboardOverview.jsx';
import { EmployeeList } from '../components/EmployeeList.jsx'; // Nuevo
import {ContractList} from "../components/ContractList.jsx";
import { Routes, Route } from 'react-router-dom';
import '../styles/Dashboard.css';


export const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-content">
                <Routes>
                    <Route path="/" element={<DashboardOverview />} />
                    <Route path="employees" element={<EmployeeList />} />
                    <Route path="contract" element={<ContractList />} />
                </Routes>

            </main>
        </div>
    );
};
