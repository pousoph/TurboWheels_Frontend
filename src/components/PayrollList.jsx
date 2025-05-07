import '../styles/PayrollList.css';
import { useEffect, useState } from 'react';
import {
    getPayrolls,
    getTotalPayroll,
    createPayroll
} from '../services/payrollService.js';
import { DeletePayrollForm } from './forms/DeletePayrollForm.jsx';
import { Plus, Trash2, DollarSign } from 'lucide-react';

export const PayrollList = () => {
    const [payrolls, setPayrolls] = useState([]);
    const [total, setTotal] = useState(0);
    const [contractId, setContractId] = useState('');
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [selectedPayrollId, setSelectedPayrollId] = useState(null);

    const loadPayrolls = async () => {
        try {
            const data = await getPayrolls();
            const totalN = await getTotalPayroll();
            setPayrolls(data);
            setTotal(totalN);
        } catch (error) {
            console.error('Error al cargar nóminas:', error);
        }
    };

    const handleCreate = async () => {
        if (!contractId) return alert("Debes ingresar un ID de contrato");
        try {
            await createPayroll(contractId);
            setContractId('');
            loadPayrolls();
        } catch (error) {
            console.error("Error al calcular nómina:", error);
        }
    };

    const handleDeleteClick = (id) => {
        setSelectedPayrollId(id);
        setShowDeleteForm(true);
    };

    useEffect(() => {
        loadPayrolls();
    }, []);

    return (
        <section className="payroll-list fade-in">
            <div className="header-row">
                <h2><DollarSign size={28} /> Nóminas Generadas</h2>
                <div className="kpi-total">
                    <span>Total Pagado:</span>
                    <strong>${total.toLocaleString()}</strong>
                </div>
            </div>

            <div className="form-inline">
                <input
                    type="number"
                    placeholder="ID del Contrato"
                    value={contractId}
                    onChange={(e) => setContractId(e.target.value)}
                />
                <button className="add-btn" onClick={handleCreate}>
                    <Plus size={18} /> Calcular Nómina
                </button>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>ID Nómina</th>
                        <th>Contrato</th>
                        <th>Fecha</th>
                        <th>Salario Base</th>
                        <th>Deducciones</th>
                        <th>Prestaciones</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {payrolls.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.contractId}</td>
                            <td>{p.fechaGeneracion}</td>
                            <td>${p.salarioBase}</td>
                            <td>${p.deducciones}</td>
                            <td>${p.prestaciones}</td>
                            <td><strong>${p.totalPagado}</strong></td>
                            <td>
                                <Trash2
                                    className="icon-action"
                                    onClick={() => handleDeleteClick(p.id)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showDeleteForm && (
                <DeletePayrollForm
                    payrollId={selectedPayrollId}
                    onClose={() => setShowDeleteForm(false)}
                    onSuccess={loadPayrolls}
                />
            )}
        </section>
    );
};