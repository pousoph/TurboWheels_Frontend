import { useEffect, useState } from 'react';
import {
    User, Mail, Phone, Calendar, MapPin,
    FileText, BadgeDollarSign, FileSignature
} from 'lucide-react';
import '../styles/DashboardOverviewEmp.css';

export const DashboardUsuarioOverview = () => {
    const [empleado, setEmpleado] = useState(null);
    const [contrato, setContrato] = useState(null);
    const [payroll, setPayroll] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const cargarDatos = async () => {
            const usuarioData = localStorage.getItem("usuario");
            if (!usuarioData) {
                setError("Usuario no autenticado.");
                return;
            }

            const usuario = JSON.parse(usuarioData);

            try {
                const resEmpleados = await fetch("http://localhost:8082/api/employees");
                const empleados = await resEmpleados.json();

                const emp = empleados.find(e => e.documento === usuario.documento);
                if (!emp) {
                    setError("Empleado no encontrado.");
                    return;
                }
                setEmpleado(emp);

                const resContratos = await fetch("http://localhost:8082/api/contracts");
                const contratos = await resContratos.json();

                const contratoEmpleado = contratos.find(c => c.employeeId === emp.id);
                if (contratoEmpleado) {
                    setContrato(contratoEmpleado);

                    // Ahora que tienes el contrato, puedes buscar la nómina
                    const resPayrolls = await fetch("http://localhost:8082/api/payrolls");
                    const payrolls = await resPayrolls.json();

                    const payrollEmpleado = payrolls.find(p => p.contractId === contratoEmpleado.id);
                    if (payrollEmpleado) {
                        setPayroll(payrollEmpleado);
                    }
                }
            } catch (err) {
                console.error("Error general:", err);
                setError("Error al cargar la información.");
            }
        };

        cargarDatos();
    }, []);

    if (error) return <div className="dashboard-overview"><p>{error}</p></div>;
    if (!empleado) return <div className="dashboard-overview"><p>Cargando datos del empleado...</p></div>;

    return (
        <div className="dashboard-overview">
            <h1>¡Bienvenido, {empleado.nombre}!</h1>
            <p>Este es tu panel donde puedes revisar tu información personal, contractual y de nómina.</p>

            <div className="grid-cards">
                <div className="employee-info-card">
                    <h2>Información Personal</h2>
                    <ul>
                        <li><User size={18} /> {empleado.nombre} {empleado.apellido}</li>
                        <li><Mail size={18} /> {empleado.tipoDocumento} {empleado.documento}</li>
                        <li><Calendar size={18} /> {empleado.fechaNacimiento}</li>
                        <li><Phone size={18} /> {empleado.telefono}</li>
                        <li><MapPin size={18} /> {empleado.direccion}</li>
                        <li>Sexo: {empleado.sexo}</li>
                    </ul>
                </div>

                <div className="employee-info-card">
                    <h2>Contrato</h2>
                    {contrato ? (
                        <ul>
                            <li><FileText size={18} /> Tipo: {contrato.tipo}</li>
                            <li><Calendar size={18} /> Inicio: {contrato.fechaInicio}</li>
                            <li><Calendar size={18} /> Fin: {contrato.fechaFin}</li>
                            <li><BadgeDollarSign size={18} /> Salario: ${contrato.salario.toLocaleString()}</li>
                            <li><FileSignature size={18} /> ID Contrato: {contrato.id}</li>
                        </ul>
                    ) : (
                        <p>No se encontró contrato.</p>
                    )}
                </div>

                <div className="employee-info-card">
                    <h2>Nómina</h2>
                    {payroll ? (
                        <ul>
                            <li><BadgeDollarSign size={18} /> Salario base: ${payroll.totalPagado.toLocaleString()}</li>
                            <li><Calendar size={18} /> Fecha pago: {payroll.fecha}</li>
                        </ul>
                    ) : (
                        <p>No se encontró nómina.</p>
                    )}
                </div>
            </div>
        </div>
    );
};