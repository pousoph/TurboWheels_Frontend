import React from 'react';

const EPSForm = ({ nombre, setNombre, handleCreate }) => {
    return (
        <div className="eps-form">
            <input
                type="text"
                placeholder="Nombre de la EPS"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button className="guardar-btn" onClick={handleCreate}>
                Guardar
            </button>
        </div>
    );
};

export default EPSForm;
