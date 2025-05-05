import '../../styles/DeleteContractForm.css';
import { deleteContrato } from '../../services/contractService.js';
import { AlertTriangle, XCircle } from 'lucide-react';

export const DeleteContractForm = ({ contratoId, onClose, onSuccess }) => {
    const handleDelete = async () => {
        try {
            await deleteContrato(contratoId); // <--- AQUÍ mandamos el ID
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error al eliminar contrato:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="delete-contract">
                <XCircle onClick={onClose} className="close-icon" />
                <AlertTriangle size={48} color="#ff4444" />
                <p>¿Estás seguro de que deseas eliminar este contrato?</p>
                <div className="btn-group">
                    <button className="cancel-btn" onClick={onClose}>Cancelar</button>
                    <button className="confirm-btn" onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </div>
    );
};
