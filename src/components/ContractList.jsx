import '../styles/ContractList.css';
import { useEffect, useState } from 'react';
import { getContratos } from '../services/contractService.js';
import {ContractForm} from "./forms/ContractForm.jsx";
import {DeleteContractForm} from "./forms/DeleteContractForm.jsx";
import {Plus, RefreshCcw, Trash2, FileSignature, FileDown} from "lucide-react";
import {descargarPDFContratos} from "../services/pdfService.js";
import {UpdateContractForm} from "./forms/UpdateContractForm.jsx";

export const ContractList = () => {
    const [contracts, setContracts] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [mostrarFormularioActualizar, setMostrarFormularioActualizar] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    //Cargar Contratos
    const loadContracts = async () => {
        try {
            const data = await getContratos();
            setContracts(data);
        } catch (error) {
            console.error('Error al cargar contratos:', error);
        }
    };

    //Prueba de Eliminacion
    const handleDelete = (id) => {
        setSelectedId(id);
        setShowDeleteForm(true);
    };

    useEffect(() => {
        loadContracts();
    }, []);

    return (
        <section className="contract-list fade-in">
            <div className="header-row">
                <h2><FileSignature size={28} /> Lista de Contratos</h2>
                <div className="crud-buttons">
                    <button className="add-btn" onClick={() => setShowCreateForm(true)}>
                        <Plus size={18} /> Agregar
                    </button>
                    <button className="update-btn" onClick={() => setMostrarFormularioActualizar(true)}>
                        <RefreshCcw size={18} /> Actualizar
                    </button>
                    <button className="delete-btn" onClick={() => setShowDeleteForm(true)}>
                        <Trash2 size={18} /> Eliminar
                    </button>
                    <button className="pdf-btn" onClick={descargarPDFContratos}>
                        <FileDown size={18} /> Exportar PDF
                    </button>
                </div>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>ID Contrato</th>
                        <th>ID Empleado</th>
                        <th>Tipo</th>
                        <th>Salario</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contracts.map(contract => (
                        <tr key={contract.id}>
                            <td>{contract.id}</td>
                            <td>{contract.employeeId}</td>
                            <td>{contract.tipo}</td>
                            <td>${contract.salario.toLocaleString()}</td>
                            <td>{contract.fechaInicio}</td>
                            <td>{contract.fechaFin}</td>
                            <td>
                                <Trash2
                                    className="icon-action"
                                    onClick={() => handleDelete(contract.id)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showCreateForm && (
                <ContractForm
                    onClose={() => setShowCreateForm(false)}
                    onSuccess={loadContracts}
                />
            )}

            {mostrarFormularioActualizar && (
                <UpdateContractForm
                    onClose={() => setMostrarFormularioActualizar(false)}
                    onSuccess={loadContracts}
                />
            )}


            {showDeleteForm && (
                <DeleteContractForm
                    contratoId={selectedId}
                    onClose={() => setShowDeleteForm(false)}
                    onSuccess={loadContracts}
                />
            )}
        </section>
    );
};