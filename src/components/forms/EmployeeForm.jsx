import { useState } from 'react';
import { crearEmpleado } from '../../services/empleadoService.js';
import '../../styles/EmployeeForm.css';
import {X} from "lucide-react";

export const EmployeeForm = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({ nombre: '', apellido: '', documento: '', tipoDocumento: '' , fechaNacimiento: '' , direccion: '', sexo: '', telefono: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await crearEmpleado(form);
            onSuccess(); // recarga lista
            onClose();   // cierra modal
        } catch (err) {
            console.error('Error al crear empleado:', err);
        }
    };

    return (
        <div className="modal-overlay">
            <form onSubmit={handleSubmit} className="formulario-empleado">
                <div className="form-header">
                    <h3>Nuevo Empleado</h3>
                    <X onClick={onClose} className="close-icon" />
                </div>
                <div className="campo">
                    <label>Nombre</label>
                    <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
                </div>
                <div className="campo">
                    <label>Apellido</label>
                    <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} required />
                </div>
                <div className="campo">
                    <label>Tipo de documento</label>
                    <select
                        name="tipoDocumento"
                        value={form.tipoDocumento}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="TI">Tarjeta de Identidad</option>
                        <option value="CE">Cédula de Extranjería</option>
                        <option value="PA">Pasaporte</option>
                        <option value="RC">Registro Civil</option>
                        <option value="NIT">NIT</option>
                        <option value="OTRO">Otro</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Número de Documento</label>
                    <input
                        type="text"
                        name="documento"
                        placeholder="Documento"
                        value={form.documento}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                                handleChange(e);
                            }
                        }}
                        required
                    />
                </div>

                <div className="campo">
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="fechaNacimiento"
                        placeholder="Fecha de nacimiento"
                        value={form.fechaNacimiento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo">
                    <label>Sexo</label>
                    <select
                        name="sexo"
                        value={form.sexo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="O">Otro / Prefiere no decir</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Direccion</label>
                    <input name="direccion" placeholder="Direccion" value={form.direccion} onChange={handleChange} required />
                </div>
                <div className="campo">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        value={form.telefono}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,10}$/.test(value)) {
                                handleChange(e);
                            }
                        }}
                        maxLength={10}
                        required
                    />
                </div>

                <div className="modal-buttons">
                    <button type="te" className="btn-guardar">Guardar</button>
                </div>
            </form>
        </div>
    );
};
