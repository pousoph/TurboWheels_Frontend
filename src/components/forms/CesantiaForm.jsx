import '../../styles/CreateForm.css';
import { useState } from 'react';
import {createCesantia} from "../../services/cesantiaService.js";


export const CesantiaForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        payrollId: '',
        valor: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCesantia(form);
            onSuccess();
        } catch (error) {
            console.error('Error al crear cesantía:', error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-header">
                <h3>Registrar Cesantía</h3>
            </div>

            <label>Id de Nómina</label>
            <input
                type="number"
                name="payrollId"
                value={form.payrollId}
                onChange={handleChange}
                required
            />

            <label>Valor de Cesantía</label>
            <input
                type="number"
                name="valor"
                value={form.valor}
                onChange={handleChange}
                required
            />

            <button type="submit" className="submit-btn">Crear Cesantía</button>
        </form>
    );
};
