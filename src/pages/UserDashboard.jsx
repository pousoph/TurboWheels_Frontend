import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/*
import { getUsuarioPorId, getPayrollsByUser } from '../../services/usuarioService.js';
*/
import '../styles/';
import {getUsuarioPorId} from "../services/userService.js";

export const UserDashboard = () => {
    const { id } = useParams();
    const [usuario, setUsuario] = useState(null);
    // const [payrolls, setPayrolls] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsuarioPorId(id);
                setUsuario(data);
                // const pagos = await getPayrollsByUser(id);
                // setPayrolls(pagos);
            } catch (err) {
                console.error('Error cargando información del usuario:', err);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="usuario-dashboard">
            <h2>Bienvenido, {usuario?.email || 'Usuario'}</h2>

            <h3>Mis Nóminas</h3>
            {/*<div className="payroll-list">*/}
            {/*    {payrolls.length === 0 && <p>No tienes nóminas registradas.</p>}*/}
            {/*    {payrolls.map(p => (*/}
            {/*        <div key={p.id} className="payroll-card">*/}
            {/*            <p><strong>ID Nómina:</strong> {p.id}</p>*/}
            {/*            <p><strong>Salario Base:</strong> ${p.salarioBase.toLocaleString()}</p>*/}
            {/*            <p><strong>Auxilio:</strong> ${p.auxilioTransporte}</p>*/}
            {/*            <p><strong>Deducciones:</strong> ${p.deducciones}</p>*/}
            {/*            <p><strong>Total:</strong> ${p.totalAPagar}</p>*/}
            {/*            <p><strong>Fecha:</strong> {p.fechaGeneracion}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};