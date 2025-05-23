import '../../styles/CreateForm.css'
import {useState} from "react";
import {registrarVacacion} from '../../services/vacationService.js';

export const VacationForm =({onSuccess})=>{

    const[form, setForm] = useState({
        payrollId: '',
        dias:'',
        disfrute:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await registrarVacacion(form);
            onSuccess();
        }catch(error){
            console.error('Error al registrar Vacación: ',error);
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-header">
                <h3>Registrar Vacaciones</h3>
            </div>
            <label>Id Nomina</label>
            <input
                type="number"
                name="payrollId"
                value={form.payrollId}
                onChange={handleChange}
                required
            />
            <label>Días</label>
            <input
                type="number"
                name="dias"
                value={form.dias}
                onChange={handleChange}
                required
            />

            <label>Disfrute</label>
            <input
                type="text"
                name="disfrute"
                value={form.disfrute}
                onChange={handleChange}
                required
            />
            <button type="submit" className="submit-btn">Registrar Vacación</button>
        </form>
    );
};