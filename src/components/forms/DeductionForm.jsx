import { useState } from 'react';
import { createDeduction } from '../../services/deductionService.js';
import '../../styles/CreateForm.css';
import {X} from "lucide-react";

export const DeductionForm = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({ payrollId: '', tipo: '', valor: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createDeduction(form);
            onSuccess(); // recarga lista
            onClose();   // cierra modal
        } catch (err) {
            console.error('Error al crear empleado:', err);
        }
    };

    return (
        <div className="modal-overlay">
            <form onSubmit={handleSubmit} className="formulario-empleado">
                <div className="form-header">
                    <h3>Asignar Deducción</h3>
                    <X onClick={onClose} className="close-icon" />
                </div>
                    <div className="campo">
                        <label>ID Nomina</label>
                        <input name="payrollId" placeholder="Id" value={form.payrollId} onChange={handleChange} required />
                    </div>
                    <div className="campo">
                        <label>Tipo</label>
                        <input name="tipo" placeholder="Tipo" value={form.tipo} onChange={handleChange} required />
                    </div>
                    <div className="campo">
                        <label>Valor</label>
                        <input name="valor" placeholder="Valor" value={form.valor} onChange={handleChange} required />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="btn-guardar">Guardar</button>
                        <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
        </div>
    );
};
