import { useState } from 'react';
import '../../styles/EmployeeForm.css';
import { crearLiquidacion } from "../../services/finalSettlementService.js";
import {X} from "lucide-react";

export const FinalSettlementForm = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({ id: '', fechaFinal: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await crearLiquidacion(form);
            onSuccess();
            onClose();
        } catch (err) {
            console.error('Error al crear liquidación:', err);
        }
    };

    return (
        <div className="modal-overlay">
            <form onSubmit={handleSubmit} className="formulario-empleado">
                <div className="form-header">
                    <h3>Asignar Liquidación</h3>
                    <X onClick={onClose} className="close-icon" />
                </div>
                <div className="campo">
                    <label>ID Empleado</label>
                    <input
                        type="number"
                        name="id"
                        placeholder="ID del empleado"
                        value={form.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo">
                    <label>Fecha Final</label>
                    <input
                        type="date"
                        name="fechaFinal"
                        placeholder="Fecha final"
                        value={form.fechaFinal}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="modal-buttons">
                        <button type="submit" className="btn-guardar">Guardar</button>
                        <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};
