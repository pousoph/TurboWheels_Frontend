import '../styles/EPSList.css';
import { useEffect, useState } from 'react';
import { Plus, Trash2, HeartHandshake } from "lucide-react";
import { getAllEPS } from "../services/epsService.js";
import { DeleteEPSForm } from "./forms/DeleteEPSForm.jsx";
import { EPSForm } from "./forms/EPSForm.jsx";

export const EpsList = () => {
    const [eps, setEps] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const loadEps = async () => {
        try {
            const data = await getAllEPS();
            setEps(data);
        } catch (error) {
            console.error('Error al cargar EPS:', error);
        }
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowDeleteForm(true);
    };

    useEffect(() => {
        loadEps();
    }, []);

    return (
        <section className="contract-list fade-in">
            <div className="header-row">
                <h2><HeartHandshake size={28} /> Lista de EPS</h2>
                <div className="crud-buttons">
                    <button className="add-btn" onClick={() => setShowCreateForm(true)}>
                        <Plus size={18} /> Agregar
                    </button>
                </div>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {eps.map(e => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.nombre}</td>
                            <td>
                                <Trash2
                                    className="icon-action"
                                    onClick={() => handleDelete(e.id)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showCreateForm && (
                <EPSForm
                    onClose={() => setShowCreateForm(false)}
                    onSuccess={loadEps}
                />
            )}

            {showDeleteForm && (
                <DeleteEPSForm
                    epsId={selectedId}
                    onClose={() => setShowDeleteForm(false)}
                    onSuccess={loadEps}
                />
            )}
        </section>
    );
};