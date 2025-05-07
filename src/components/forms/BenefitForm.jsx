import '../../styles/CreateForm.css';
import { useState } from 'react';
import { createBeneficio } from "../../services/benefitService.js";


export const BenefitForm = ({onSuccess }) => {
    const [form, setForm] = useState({
        tipo: '',
        valor: '',
        payrollId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createBeneficio(form);
            onSuccess();
        } catch (error) {
            console.error('Error al crear beneficio:', error);
        }
    };

    return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h3>Nuevo Beneficio</h3>
                </div>

                <label>Tipo de Beneficio</label>
                <input
                    type="text"
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    required
                />

                <label>Valor del Beneficio</label>
                <input
                    type="number"
                    name="valor"
                    value={form.valor}
                    onChange={handleChange}
                    required
                />

                <label>Id Nomina</label>
                <input
                    type="number"
                    name="payrollId"
                    value={form.payrollId}
                    onChange={handleChange}
                    required
                />


                <button type="submit" className="submit-btn">Crear Beneficio</button>
            </form>
    );
};
