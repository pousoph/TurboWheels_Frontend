import '../styles/PayrollList.css';
import { useEffect, useState } from 'react';
import {
    getPayrolls,
    getTotalPayroll,
    createPayroll
} from '../services/payrollService.js';
import { DeletePayrollForm } from './forms/DeletePayrollForm.jsx';
import {Plus, Trash2, DollarSign, FileDown} from 'lucide-react';
import {descargarPDFNomina} from "../services/pdfService.js";

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
                <br/>
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
                <button className="pdf-btn" onClick={descargarPDFNomina}>
                    <FileDown size={18} /> Exportar PDF
                </button>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>ID Nómina</th>
                        <th>Id Contrato</th>
                        <th>Fecha</th>
                        <th>Total Pagado</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {payrolls.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.contractId}</td>
                            <td>{p.fecha}</td>
                            <td>${p.totalPagado}</td>
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