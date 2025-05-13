import { useState } from 'react';
import '../../styles/EmployeeForm.css';
import { crearLiquidacion } from "../../services/finalSettlementService.js";

export const FinalSettlementForm = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({ id: '', fechaFinal: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await crearLiquidacion(form);
            onSuccess(); // recarga lista
            onClose();   // cierra modal
        } catch (err) {
            console.error('Error al crear liquidacion:', err);
        }
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Agregar liquidación</h2>
                <form onSubmit={handleSubmit} className="formulario-empleado">
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
        </div>
    );
};
