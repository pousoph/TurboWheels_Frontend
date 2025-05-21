// UpdateContractForm.jsx
import { useState } from 'react';
import '../../styles/UpdateEmployeeForm.css';
import { updateContrato, getContratoById } from '../../services/contractService.js';
import { RefreshCcw, X, Search, Loader } from 'lucide-react';

export const UpdateContractForm = ({ onClose, onSuccess }) => {
    const [contractId, setContractId] = useState('');
    const [formData, setFormData] = useState({
        employeeId: '',
        tipo: '',
        fechaInicio: '',
        fechaFin: '',
        salario: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchContract = async () => {
        if (!contractId) {
            alert("Ingresa un ID de contrato válido");
            return;
        }
        setIsLoading(true);
        try {
            const contrato = await getContratoById(contractId);
            setFormData({
                employeeId: contrato.employeeId,
                tipo: contrato.tipo,
                fechaInicio: contrato.fechaInicio,
                fechaFin: contrato.fechaFin,
                salario: contrato.salario
            });
        } catch (error) {
            console.error('Error al obtener contrato:', error);
            alert("No se encontró contrato con ese ID");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateContrato(formData.employeeId, formData);
            alert("Contrato actualizado con éxito");
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error al actualizar el contrato:', error);
            alert("Error al actualizar el contrato");
        }
    };

    return (
        <div className="update-form-overlay">
            <div className="update-form-container">
                <button className="close-btn" onClick={onClose}><X size={20} /></button>
                <h3><RefreshCcw size={24} /> Actualizar Contrato</h3>

                {/* Búsqueda del contrato */}
                <div className="id-section">
                    <label htmlFor="contractId">ID del Contrato:</label>
                    <input
                        type="number"
                        id="contractId"
                        name="contractId"
                        value={contractId}
                        onChange={(e) => setContractId(e.target.value)}
                        required
                    />
                    <button type="button" onClick={handleFetchContract} className="fetch-btn">
                        {isLoading ? <Loader className="spinner" /> : <Search size={18} />}
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="tipo">Tipo de Contrato:</label>
                    <input
                        type="text"
                        id="tipo"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="fechaInicio">Fecha de Inicio:</label>
                    <input
                        type="date"
                        id="fechaInicio"
                        name="fechaInicio"
                        value={formData.fechaInicio}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="fechaFin">Fecha de Fin:</label>
                    <input
                        type="date"
                        id="fechaFin"
                        name="fechaFin"
                        value={formData.fechaFin}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="salario">Salario:</label>
                    <input
                        type="number"
                        id="salario"
                        name="salario"
                        value={formData.salario}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="update-btn-form">Actualizar Contrato</button>
                </form>
            </div>
        </div>
    );
};
