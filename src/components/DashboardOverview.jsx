import '../styles/DashboardOverview.css';
import { useEffect, useState } from 'react';
import { Users, FileText, BadgeDollarSign, AlertTriangle } from 'lucide-react';
import {
    getTotalContratos,
    getTotalEmpleados,
    getTotalNominas
} from '../services/dashboardService';

export const DashboardOverview = () => {
    const [empleadosActivos, setEmpleadosActivos] = useState(0);
    const [nominasGeneradas, setNominasGeneradas] = useState(0);
    const [totalContratos, setTotalContratos] = useState(0);

    useEffect(() => {
        getTotalEmpleados().then(setEmpleadosActivos);
        getTotalNominas().then(setNominasGeneradas);
        getTotalContratos().then(setTotalContratos);
    }, []);

    return (
        <div className="dashboard-overview">
            <h1>Resumen general de Nómina</h1>
            <p className="dashboard-description">
                Este panel proporciona una vista rápida del estado actual del sistema de nómina, incluyendo la cantidad de empleados activos, contratos registrados y nóminas procesadas. Puedes usar esta información para tomar decisiones operativas inmediatas.
            </p>

            <div className="stats-cards">
                <div className="stat-card">
                    <Users className="icon" />
                    <h3>Empleados activos</h3>
                    <p>{empleadosActivos}</p>
                </div>
                <div className="stat-card">
                    <FileText className="icon" />
                    <h3>Nóminas generadas</h3>
                    <p>{nominasGeneradas}</p>
                </div>
                <div className="stat-card">
                    <BadgeDollarSign className="icon" />
                    <h3>Contratos Generados</h3>
                    <p>{totalContratos}</p>
                </div>
            </div>
        </div>
    );
};
