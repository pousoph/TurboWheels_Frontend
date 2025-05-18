import '../styles/EmployeeList.css'
import { useState, useEffect } from 'react';
import { getEmpleados } from '../services/empleadoService.js';
import { EmployeeForm } from './forms/EmployeeForm.jsx';
import { DeleteEmployeeForm } from './forms/DeleteEmployeeForm.jsx';
import { UpdateEmployeeForm } from './forms/UpdateEmployeeForm.jsx';
import { descargarPDFEmpleados } from '../services/pdfService';
import { Plus, RefreshCcw, Trash2, Users, FileDown } from "lucide-react";

export const EmployeeList = () => {
    const [empleados, setEmpleados] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [mostrarFormularioActualizar, setMostrarFormularioActualizar] = useState(false);
    const [mostrarFormularioEliminar, setMostrarFormularioEliminar] = useState(false);

    const cargarEmpleados = async () => {
        try {
            const data = await getEmpleados();
            setEmpleados(data);
        } catch (error) {
            console.error('Error al obtener empleados:', error);
        }
    };

    useEffect(() => {
        cargarEmpleados();
    }, []);

    return (
        <section className="employee-list fade-in">
            <div className="header-row">
                <h2><Users size={28} /> Lista de Empleados</h2>
                <div className="crud-buttons">
                    <button className="add-btn" onClick={() => setMostrarFormulario(true)}>
                        <Plus size={18} /> Agregar
                    </button>
                    <button className="update-btn" onClick={() => setMostrarFormularioActualizar(true)}>
                        <RefreshCcw size={18} /> Actualizar
                    </button>
                    <button className="delete-btn" onClick={() => setMostrarFormularioEliminar(true)}>
                        <Trash2 size={18} /> Eliminar
                    </button>
                    <button className="pdf-btn" onClick={descargarPDFEmpleados}>
                        <FileDown size={18} /> Exportar PDF
                    </button>
                </div>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Tipo de documento</th>
                        <th>Numero de documento</th>
                        <th>Fecha nacimiento</th>
                        <th>Sexo</th>
                        <th>Teléfono</th>
                    </tr>
                    </thead>
                    <tbody>
                    {empleados.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.nombre}</td>
                            <td>{emp.apellido}</td>
                            <td>{emp.tipoDocumento}</td>
                            <td>{emp.documento}</td>
                            <td>{emp.fechaNacimiento}</td>
                            <td>{emp.sexo}</td>
                            <td>{emp.telefono}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {mostrarFormulario && (
                <EmployeeForm
                    onClose={() => setMostrarFormulario(false)}
                    onSuccess={cargarEmpleados}
                />
            )}
            {mostrarFormularioActualizar && (
                <UpdateEmployeeForm
                    onClose={() => setMostrarFormularioActualizar(false)}
                    onSuccess={cargarEmpleados}
                />
            )}
            {mostrarFormularioEliminar && (
                <DeleteEmployeeForm
                    onClose={() => setMostrarFormularioEliminar(false)}
                    onSuccess={cargarEmpleados}
                />
            )}

        </section>
    );
};
