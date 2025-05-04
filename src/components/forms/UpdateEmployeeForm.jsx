// src/components/UpdateEmployeeForm.jsx
import { useState } from 'react';
import '../../styles/UpdateEmployeeForm.css';
import { updateEmpleado } from '../../services/empleadoService.js';
import { RefreshCcw, X } from 'lucide-react';

export const UpdateEmployeeForm = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        id: '',
        nombre: '',
        apellido: '',
        documento: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateEmpleado(formData.id, {
                nombre: formData.nombre,
                apellido: formData.apellido,
                documento: formData.documento
            });
            alert("Empleado actualizado con éxito");
            onSuccess();
            onClose();
        } catch (error) {
            console.error("Error al actualizar empleado", error);
            alert("Error al actualizar el empleado");
        }
    };

    return (
        <div className="update-form-overlay">
            <div className="update-form-container">
                <button className="close-btn" onClick={onClose}><X size={20} /></button>
                <h3><RefreshCcw size={24}/> Actualizar Empleado</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="id">ID del Empleado:</label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="nombre">Nuevo Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="apellido">Nuevo Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="documento">Nuevo Documento:</label>
                    <input
                        type="text"
                        id="documento"
                        name="documento"
                        value={formData.documento}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="update-btn-form">Actualizar</button>
                </form>
            </div>
        </div>
    );
};
