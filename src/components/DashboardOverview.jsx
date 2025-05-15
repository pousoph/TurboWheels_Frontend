import '../styles/DashboardOverview.css';
import { Users, FileText, BadgeDollarSign, AlertTriangle, Bell } from 'lucide-react';
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const DashboardOverview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("usuario");

        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.id === id) {
                setUsuario(userData);
            } else {
                navigate("/login");
            }
        } else {
            navigate("/login");
        }
    }, [id, navigate]);


    return (
        <div className="dashboard-overview">
            <h1 className="text-2xl font-bold text-red-600">
                Bienvenido, {usuario.nombre}
            </h1>
            <h1>Resumen general de Nómina</h1>

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
