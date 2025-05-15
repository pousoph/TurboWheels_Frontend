import { useEffect, useState } from 'react';
import { FileText, Calendar, BadgeDollarSign, FileSignature } from 'lucide-react';
import '../styles/DashboardOverview.css';

export const ContractEmpleado = () => {
    const [empleadoId, setEmpleadoId] = useState(null);
    const [contrato, setContrato] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const usuarioData = localStorage.getItem("usuario");
        if (!usuarioData) {
            setError("Usuario no autenticado.");
            return;
        }

        const usuario = JSON.parse(usuarioData);

        // 1. Buscar al empleado por documento
        fetch("http://localhost:8082/api/employees")
            .then(res => res.json())
            .then(employees => {
                const empleado = employees.find(e => e.documento === usuario.documento);
                if (!empleado) {
                    setError("Empleado no encontrado.");
                    return;
                }
                setEmpleadoId(empleado.id);

                // 2. Buscar el contrato del empleado
                fetch("http://localhost:8082/api/contracts")
                    .then(res => res.json())
                    .then(contracts => {
                        const contratoEmpleado = contracts.find(c => c.employeeId === empleado.id);
                        if (contratoEmpleado) {
                            setContrato(contratoEmpleado);
                        } else {
                            setError("Contrato no encontrado para este empleado.");
                        }
                    });
            })
            .catch(err => {
                console.error("Error buscando contrato:", err);
                setError("Error al cargar el contrato.");
            });
    }, []);

    if (error) return <div className="dashboard-overview"><p>{error}</p></div>;
    if (!contrato) return <div className="dashboard-overview"><p>Cargando contrato...</p></div>;

    return (
        <div className="dashboard-overview">
            <h1>Mi Contrato</h1>

            <div className="employee-info-card">
                <h2>Detalles del contrato</h2>
                <ul>
                    <li><FileText size={18} /> Tipo de contrato: {contrato.tipo}</li>
                    <li><Calendar size={18} /> Fecha de inicio: {contrato.fechaInicio}</li>
                    <li><Calendar size={18} /> Fecha de finalización: {contrato.fechaFin}</li>
                    <li><BadgeDollarSign size={18} /> Salario: ${contrato.salario.toLocaleString()}</li>
                    <li><FileSignature size={18} /> ID Contrato: {contrato.id}</li>
                </ul>
            </div>
        </div>
    );
};
