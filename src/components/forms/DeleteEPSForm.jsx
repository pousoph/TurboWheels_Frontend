import React from "react";
import "../../styles/EPSList.css";

const DeleteEPSForm = ({ onCancel, onConfirm }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>¿Estás seguro de eliminar esta EPS?</h3>
                <div className="modal-buttons">
                    <button className="btn-cancel" onClick={onCancel}>
                        Cancelar
                    </button>
                    <button className="btn-confirm" onClick={onConfirm}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteEPSForm;
