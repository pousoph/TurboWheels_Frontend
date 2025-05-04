import { useState } from 'react';
import { crearEmpleado } from '../../services/empleadoService.js';
import '../../styles/EmployeeForm.css';

export const EmployeeForm = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({ nombre: '', apellido: '', documento: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await crearEmpleado(form);
            onSuccess(); // recarga lista
            onClose();   // cierra modal
        } catch (err) {
            console.error('Error al crear empleado:', err);
        }
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Agregar Empleado</h2>
                <form onSubmit={handleSubmit} className="formulario-empleado">
                    <div className="campo">
                        <label>Nombre</label>
                        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
                    </div>
                    <div className="campo">
                        <label>Apellido</label>
                        <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} required />
                    </div>
                    <div className="campo">
                        <label>Documento</label>
                        <input name="documento" placeholder="Documento" value={form.documento} onChange={handleChange} required />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="btn-guardar">Guardar</button>
                        <button type="button" className="btn-cancelar" onClick={onClose}>Cancelar</button>
                    </div>
                </form>

            </div>
        </div>
    );
};
