import '../../styles/ContractForm.css';
import { useState } from 'react';
import { createContrato } from '../../services/contractService.js';
import { X } from 'lucide-react';

export const ContractForm = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({
        tipo: '',
        salario: '',
        fechaInicio: '',
        fechaFin: '',
        employeeId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createContrato(form);
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error al crear contrato:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <form className="contract-form" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h3>Nuevo Contrato</h3>
                    <X onClick={onClose} className="close-icon" />
                </div>

                <label>Tipo de Contrato</label>
                <input
                    type="text"
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    required
                />

                <label>Salario</label>
                <input
                    type="number"
                    name="salario"
                    value={form.salario}
                    onChange={handleChange}
                    required
                />

                <label>Fecha Inicio</label>
                <input
                    type="date"
                    name="fechaInicio"
                    value={form.fechaInicio}
                    onChange={handleChange}
                    required
                />

                <label>Fecha Fin</label>
                <input
                    type="date"
                    name="fechaFin"
                    value={form.fechaFin}
                    onChange={handleChange}
                />

                <label>ID del Empleado</label>
                <input
                    type="number"
                    name="employeeId"
                    value={form.employeeId}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="submit-btn">Crear Contrato</button>
            </form>
        </div>
    );
};
