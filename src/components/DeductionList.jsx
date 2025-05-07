import '../styles/EmployeeList.css'
import { useState, useEffect } from 'react';
import { getDeductions } from '../services/deductionService.js';
import { DeductionForm } from './forms/DeductionForm.jsx';
import { Plus, RefreshCcw, Trash2, Users } from "lucide-react";

export const DeductionList = () => {
    const [deduction, setDeduction] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const cargarDeducciones = async () => {
        try {
            const data = await getDeductions();
            setDeduction(data);
        } catch (error) {
            console.error('Error al obtener deducciones:', error);
        }
    };

    useEffect(() => {
        cargarDeducciones();
    }, []);

    return (
        <section className="employee-list fade-in">
            <div className="header-row">
                <h2><Users size={28} /> Lista de Deducciones</h2>
                <div className="crud-buttons">
                    <button className="add-btn" onClick={() => setMostrarFormulario(true)}>
                        <Plus size={18} /> Agregar
                    </button>
                </div>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                    </tr>
                    </thead>
                    <tbody>
                    {deduction.map((ded) => (
                        <tr key={ded.id}>
                            <td>{ded.id}</td>
                            <td>{ded.tipo}</td>
                            <td>{ded.valor}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {mostrarFormulario && (
                <DeductionForm
                    onClose={() => setMostrarFormulario(false)}
                    onSuccess={cargarDeducciones}
                />
            )}

        </section>
    );
};
