import '../../styles/CreateForm.css';
import { useState } from 'react';
import { registrarSeguridad } from '../../services/socialsecService.js';

export const SocialSecurityForm = ({ onSuccess }) => {
    const [form, setForm] = useState({
        payrollId: '',
        pension: '',
        salud: '',
        arl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { payrollId, pension, salud, arl } = form;

            // Convertir los valores a números si es necesario
            const dto = {
                pension: Number(pension),
                salud: Number(salud),
                arl: Number(arl)
            };

            await registrarSeguridad(payrollId, dto);
            onSuccess();
        } catch (error) {
            console.error('Error al registrar Seguridad Social:', error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-header">
                <h3>Registrar Seguridad Social</h3>
            </div>

            <label>Id Nómina</label>
            <input
                type="number"
                name="payrollId"
                value={form.payrollId}
                onChange={handleChange}
                required
            />

            <label>Pensión</label>
            <input
                type="number"
                name="pension"
                value={form.pension}
                onChange={handleChange}
                required
            />

            <label>Salud</label>
            <input
                type="number"
                name="salud"
                value={form.salud}
                onChange={handleChange}
                required
            />

            <label>ARL</label>
            <input
                type="number"
                name="arl"
                value={form.arl}
                onChange={handleChange}
                required
            />

            <button type="submit" className="submit-btn">
                Registrar Seguridad Social
            </button>
        </form>
    );
};
