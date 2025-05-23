import React, { useEffect, useState } from "react";
import {
    getAuditoriaCesantias,
    getAuditoriaBeneficios,
    getAuditoriaContratos,
    getAuditoriaDeducciones,
    getAuditoriaEmpleados,
    getAuditoriaEPS,
    getAuditoriaFinal,
    getAuditoriaIncapacidad,
    getAuditoriaNomina,
    getAuditoriaSocial,
    getAuditoriaVacacion
} from "../services/notificationService.js";
import "../styles/Notification.css";

const AuditoriaTable = ({ title, data }) => (
    <div className="auditoria-block">
        <h2>{title}</h2>
        <table className="auditoria-table">
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Acción</th>
                <th>Autor</th>
            </tr>
            </thead>
            <tbody>
            {data.length === 0 ? (
                <tr>
                    <td colSpan="3">No hay registros de auditoría.</td>
                </tr>
            ) : (
                data.map(item => (
                    <tr key={item.id}>
                        <td>{new Date(item.fecha).toLocaleString()}</td>
                        <td>{item.accion}</td>
                        <td>{item.autor}</td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    </div>
);

const useToast = () => {
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);

    const showToast = (msg) => {
        setMessage(msg);
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
    };

    const Toast = () => (
        <div className={`toast ${visible ? "show" : ""}`}>
            {message}
        </div>
    );

    return [Toast, showToast];
};

export const NotificationList = () => {
    const [cesantias, setCesantias] = useState([]);
    const [beneficios, setBeneficios] = useState([]);
    const [contratos, setContratos] = useState([]);
    const [deducciones, setDeducciones] = useState([]);
    const [empleados, setEmpleados] = useState([]);
    const [eps, setEPS] = useState([]);
    const [final, setFinal] = useState([]);
    const [incapacidad, setIncapacidad] = useState([]);
    const [nomina, setNomina] = useState([]);
    const [social, setSocial] = useState([]);
    const [vacacion, setVacacion] = useState([]);

    const [Toast, showToast] = useToast();

    useEffect(() => {
        const fetchAllAuditorias = async () => {
            const loaders = [
                [getAuditoriaCesantias, setCesantias, "Cesantías"],
                [getAuditoriaBeneficios, setBeneficios, "Beneficios"],
                [getAuditoriaContratos, setContratos, "Contratos"],
                [getAuditoriaDeducciones, setDeducciones, "Deducciones"],
                [getAuditoriaEmpleados, setEmpleados, "Empleados"],
                [getAuditoriaEPS, setEPS, "EPS"],
                [getAuditoriaFinal, setFinal, "Liquidación Final"],
                [getAuditoriaIncapacidad, setIncapacidad, "Incapacidad"],
                [getAuditoriaNomina, setNomina, "Nómina"],
                [getAuditoriaSocial, setSocial, "Seguridad Social"],
                [getAuditoriaVacacion, setVacacion, "Vacaciones"]
            ];

            for (const [fetchFn, setter, label] of loaders) {
                const data = await fetchFn();
                setter(prev => {
                    if (prev.length !== data.length) {
                        showToast(`Se actualizó la auditoría del módulo de ${label}`);
                    }
                    return data;
                });
            }
        };

        fetchAllAuditorias();
    }, []);

    return (
        <div className="notifications-container">
            <h1>Auditorías del Sistema</h1>
            <AuditoriaTable title="Módulo de Cesantías" data={cesantias} />
            <AuditoriaTable title="Módulo de Beneficios" data={beneficios} />
            <AuditoriaTable title="Módulo de Contratos" data={contratos} />
            <AuditoriaTable title="Módulo de Deducciones" data={deducciones} />
            <AuditoriaTable title="Módulo de Empleados" data={empleados} />
            <AuditoriaTable title="Módulo de EPS" data={eps} />
            <AuditoriaTable title="Módulo de Liquidación Final" data={final} />
            <AuditoriaTable title="Módulo de Incapacidades" data={incapacidad} />
            <AuditoriaTable title="Módulo de Nómina" data={nomina} />
            <AuditoriaTable title="Módulo de Seguridad Social" data={social} />
            <AuditoriaTable title="Módulo de Vacaciones" data={vacacion} />
            <Toast />
        </div>
    );
};
