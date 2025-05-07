import { Sidebar } from '../components/Sidebar.jsx';
import { DashboardOverview } from '../components/DashboardOverview.jsx';
import { EmployeeList } from '../components/EmployeeList.jsx';
import { ContractList } from "../components/ContractList.jsx";
import { Routes, Route } from 'react-router-dom';
import '../styles/Dashboard.css';
import { SocialSecurityList } from "../components/SocialSecurityList.jsx";
import { CesantiaForm } from "../components/forms/CesantiaForm.jsx";
import { VacationList } from "../components/VacationList.jsx";
import { IncapacityList } from "../components/IncapacityList.jsx";
import { DeductionList } from "../components/DeductionList.jsx";
import { EpsList } from "../components/EpsList.jsx";
import { PayrollList } from "../components/PayrollList.jsx";
import { BenefitForm } from "../components/forms/BenefitForm.jsx";

export const Dashboard = () => {

    // Funciones onSuccess para manejar acción tras creación exitosa
    const handleCesantiaSuccess = () => {
        alert("Cesantía registrada con éxito");
        // Aquí podrías actualizar la lista o redireccionar si lo deseas
    };

    const handleBeneficioSuccess = () => {
        alert("Beneficio creado con éxito");
        // Lógica adicional si la necesitas
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-content">
                <Routes>
                    <Route path="/" element={<DashboardOverview />} />
                    <Route path="employees" element={<EmployeeList />} />
                    <Route path="contract" element={<ContractList />} />
                    <Route path="beneficio" element={<BenefitForm onSuccess={handleBeneficioSuccess} />} />
                    <Route path="social-security" element={<SocialSecurityList />} />
                    <Route path="cesantias" element={<CesantiaForm onSuccess={handleCesantiaSuccess} />} />
                    {/*<Route path="liquidacion-definitiva" element={< />} />*/}
                    <Route path="vacaciones" element={<VacationList />} />
                    <Route path="incapacidades" element={<IncapacityList />} />
                    <Route path="deducciones" element={<DeductionList />} />
                    <Route path="eps" element={<EpsList />} />
                    <Route path="nomina" element={<PayrollList />} />
                </Routes>
            </main>
        </div>
    );
};
