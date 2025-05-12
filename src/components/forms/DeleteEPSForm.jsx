import '../../styles/DeleteContractForm.css';
import { deleteEPS } from '../../services/epsService.js';
import { AlertTriangle, XCircle } from 'lucide-react';

export const DeleteEPSForm = ({ epsId, onClose, onSuccess }) => {
    const handleDelete = async () => {
        try {
            await deleteEPS(epsId);
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error al eliminar EPS:', error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="delete-contract">
                <XCircle onClick={onClose} className="close-icon" />
                <AlertTriangle size={48} color="#ff4444" />
                <p>¿Estás seguro de que deseas eliminar esta EPS?</p>
                <div className="btn-group">
                    <button className="cancel-btn" onClick={onClose}>Cancelar</button>
                    <button className="confirm-btn" onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </div>
    );
};