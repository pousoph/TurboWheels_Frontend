import '../../styles/DeletePayrollForm.css';
import { deletePayroll } from '../../services/payrollService.js';
import { AlertTriangle, XCircle } from 'lucide-react';

export const DeletePayrollForm = ({ payrollId, onClose, onSuccess }) => {
    const handleDelete = async () => {
        try {
            await deletePayroll(payrollId);
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error al eliminar nómina:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="delete-modal">
                <XCircle onClick={onClose} className="close-icon" />
                <AlertTriangle size={48} color="#ff4444" />
                <p>¿Estás seguro de eliminar la nómina con ID <strong>{payrollId}</strong>?</p>
                <div className="btn-group">
                    <button className="cancel-btn" onClick={onClose}>Cancelar</button>
                    <button className="confirm-btn" onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </div>
    );
};