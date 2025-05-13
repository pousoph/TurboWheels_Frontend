import '../styles/EmployeeList.css'
import { useState, useEffect } from 'react';
import { getLiquidaciones } from '../services/finalSettlementService.js';
import { FinalSettlementForm } from './forms/FinalSettlementForm.jsx';
import { Plus, RefreshCcw, Trash2, Users } from "lucide-react";

export const FinalSettlementList = () => {
    const [liquidaciones, setLiquidaciones] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const cargarLiquidaciones = async () => {
        try {
            const data = await getLiquidaciones();
            setLiquidaciones(data);
        } catch (error) {
            console.error('Error al obtener liquidaciones:', error);
        }
    };

    useEffect(() => {
        cargarLiquidaciones();
    }, []);

    return (
        <section className="employee-list fade-in">
            <div className="header-row">
                <h2><Users size={28} /> Lista de liquidaciones</h2>
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
                        <th>Id Empleado</th>
                        <th>Fecha Final</th>
                        <th>Valor Pagado</th>
                    </tr>
                    </thead>
                    <tbody>
                    {liquidaciones.map((liqui) => (
                        <tr key={liqui.id}>
                            <td>{liqui.id}</td>
                            <td>{liqui.fechaFinal}</td>
                            <td>{liqui.valorPagado}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {mostrarFormulario && (
                <FinalSettlementForm
                    onClose={() => setMostrarFormulario(false)}
                    onSuccess={cargarLiquidaciones}
                />
            )}
        </section>
    );
};
