import '../styles/EmployeeList.css';
import { Users, BadgeCheck, UserX, MoreVertical } from 'lucide-react';

const mockEmployees = [
    { id: 1, nombre: "Laura Gómez", cargo: "Analista Financiera", contrato: "Término fijo", ingreso: "2021-02-14", estado: "Activo" },
    { id: 2, nombre: "Carlos Ruiz", cargo: "Ingeniero de Sistemas", contrato: "Indefinido", ingreso: "2020-08-09", estado: "Inactivo" },
    { id: 3, nombre: "Andrea López", cargo: "Técnico Mecánico", contrato: "Prestación de servicios", ingreso: "2023-01-18", estado: "Activo" }
];

export const EmployeeList = () => {
    return (
        <section className="employee-list fade-in">
            <h2><Users size={28} /> Lista de Empleados</h2>
            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Contrato</th>
                        <th>Ingreso</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockEmployees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.nombre}</td>
                            <td>{emp.cargo}</td>
                            <td>{emp.contrato}</td>
                            <td>{emp.ingreso}</td>
                            <td className={emp.estado === 'Activo' ? 'activo' : 'inactivo'}>
                                {emp.estado === 'Activo' ? <BadgeCheck size={18} /> : <UserX size={18} />}
                                {emp.estado}
                            </td>
                            <td><MoreVertical size={18} className="icon-action" /></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
