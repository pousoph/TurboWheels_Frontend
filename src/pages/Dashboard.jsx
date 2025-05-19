import { Sidebar } from '../components/Sidebar.jsx';
import { DashboardOverview } from '../components/DashboardOverview.jsx';
import { EmployeeList } from '../components/EmployeeList.jsx';
import { ContractList } from "../components/ContractList.jsx";
import { Routes, Route } from 'react-router-dom';
import '../styles/Dashboard.css';
import { SocialSecurityList } from "../components/SocialSecurityList.jsx";
import { CesantiaForm } from "../components/forms/CesantiaForm.jsx";
import { VacationForm } from "../components/forms/VacationForm.jsx";
import {IncapacityForm} from "../components/forms/IncapacityForm.jsx";
import { DeductionList } from "../components/DeductionList.jsx";
import { EpsList } from "../components/EpsList.jsx";
import { PayrollList } from "../components/PayrollList.jsx";
import { BenefitForm } from "../components/forms/BenefitForm.jsx";
import {FinalSettlementForm} from "../components/forms/FinalSettlementForm.jsx";
import {FinalSettlementList} from "../components/FinalSettlementList.jsx";
import {SocialSecurityForm} from "../components/forms/SocialSecurityForm.jsx";

export const Dashboard = () => {

    const handleCesantiaSuccess = () => {
        alert("Cesantía registrada con éxito");

    };

    const handleBeneficioSuccess = () => {
        alert("Beneficio creado con éxito");

    };
    const handleSocialSuccess=()=>{
        alert("Seguridad social creada con éxito");
    }

    const handleIncapacitySuccess=()=>{
        alert("Incapacidad creada con éxito");
    }
    const handleVactionSuccess=()=>{
        alert("Vacación registrada con éxito");
    }

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-content">
                <Routes>
                    <Route path="/" element={<DashboardOverview />} />
                    <Route path="employees" element={<EmployeeList />} />
                    <Route path="contract" element={<ContractList />} />
                    <Route path="beneficio" element={<BenefitForm onSuccess={handleBeneficioSuccess} />} />
                    <Route path="social-security" element={<SocialSecurityForm onSuccess={handleSocialSuccess} />} />
                    <Route path="cesantias" element={<CesantiaForm onSuccess={handleCesantiaSuccess} />} />
                    <Route path="liquidacion-definitiva" element={<FinalSettlementList />} />
                    <Route path="vacaciones" element={<VacationForm onSuccess={handleVactionSuccess} />} />
                    <Route path="incapacidades" element={<IncapacityForm onSuccess={handleIncapacitySuccess} />} />
                    <Route path="deducciones" element={<DeductionList />} />
                    <Route path="eps" element={<EpsList />} />
                    <Route path="nomina" element={<PayrollList />} />
                </Routes>
            </main>
        </div>
    );
};
