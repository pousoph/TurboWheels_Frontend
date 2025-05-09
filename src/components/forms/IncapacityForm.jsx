import '../../styles/CreateForm.css'
import {useState} from "react";
import {createIncapacidad} from "../../services/incapacityService.js";

export const IncapacityForm =({onSuccess})=>{

    const[form, setForm] = useState({
        epsId:'',
        payrollId: '',
        tipo:'',
        dias:'',
        valorPagado:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createIncapacidad(form);
            onSuccess();
        }catch(error){
            console.error('Error al crear Incapacidad: ',error);
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-header">
                <h3>Registrar Incapacidad</h3>
            </div>

            <label>Id EPS</label>
            <input
                type="number"
                name="epsId"
                value={form.epsId}
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
            <label>Tipo de Incapacidad</label>
            <input
                type="text"
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                required
            />

            <label>Días de Incapacidad</label>
            <input
                type="number"
                name="dias"
                value={form.dias}
                onChange={handleChange}
                required
            />
            <label>Valor a Pagar</label>
            <input
                type="number"
                name="valorPagado"
                value={form.valorPagado}
                onChange={handleChange}
                required
            />
            <button type="submit" className="submit-btn">Registrar Incapacidad</button>
        </form>
    );
};