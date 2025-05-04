// src/components/DeleteEmployeeForm.jsx
import { useState } from 'react';
import '../../styles/DeleteEmployeeForm.css';
import { deleteEmpleado } from '../../services/empleadoService.js';
import { Trash2, X } from 'lucide-react';

export const DeleteEmployeeForm = ({ onClose, onSuccess }) => {
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!id) {
            alert("Por favor ingresa un ID válido");
            return;
        }

        try {
            await deleteEmpleado(id);
            alert("Empleado eliminado con éxito");
            onSuccess();
            onClose();
        } catch (error) {
            console.error("Error al eliminar empleado", error);
            alert("Error al eliminar el empleado");
        }
    };

    return (
        <div className="delete-form-overlay">
            <div className="delete-form-container">
                <button className="close-btn" onClick={onClose}><X size={20} /></button>
                <h3><Trash2 size={24}/> Eliminar Empleado</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="employeeId">ID del Empleado:</label>
                    <input
                        type="number"
                        id="employeeId"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                    <button type="submit" className="delete-btn-form">Eliminar</button>
                </form>
            </div>
        </div>
    );
};
