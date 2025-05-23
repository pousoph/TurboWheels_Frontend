import { useState } from 'react';
import { createEPS } from '../../services/epsService.js';
import '../../styles/EmployeeForm.css';
import {X} from "lucide-react";

export const EPSForm = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({ nombre: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEPS(form.nombre);
            onSuccess(); // recarga lista
            onClose();   // cierra modal
        } catch (err) {
            console.error('Error al agregar EPS:', err);
        }
    };

    return (
        <div className="modal-overlay">
            <form onSubmit={handleSubmit} className="formulario-empleado">
                <div className="form-header">
                    <h3>Registrar EPS</h3>
                    <X onClick={onClose} className="close-icon" />
                </div>
                    <div className="campo">
                        <label>Nombre</label>
                        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="btn-guardar">Guardar</button>
                        <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
        </div>
    );
};
