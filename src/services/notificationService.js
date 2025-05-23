const BASE_URL = "http://localhost:8082/api"; // Ajusta si tu puerto cambia

export const getAuditoriaCesantias = async () => {
    const res = await fetch(`${BASE_URL}/cesantia/triggers`);
    return res.json();
};

export const getAuditoriaBeneficios = async () => {
    const res = await fetch(`${BASE_URL}/benefits/triggers`);
    return res.json();
};

export const getAuditoriaContratos = async () => {
    const res = await fetch(`${BASE_URL}/contracts/triggers`);
    return res.json();
};

export const getAuditoriaDeducciones = async () => {
    const res = await fetch(`${BASE_URL}/deductions/triggers`);
    return res.json();
};

export const getAuditoriaEmpleados = async () => {
    const res = await fetch(`${BASE_URL}/employees/triggers`);
    return res.json();
};

export const getAuditoriaEPS = async () => {
    const res = await fetch(`${BASE_URL}/eps/triggers`);
    return res.json();
};

export const getAuditoriaFinal = async () => {
    const res = await fetch(`${BASE_URL}/final-settlement/triggers`);
    return res.json();
};

export const getAuditoriaIncapacidad = async () => {
    const res = await fetch(`${BASE_URL}/incapacities/triggers`);
    return res.json();
};

export const getAuditoriaNomina = async () => {
    const res = await fetch(`${BASE_URL}/payrolls/triggers`);
    return res.json();
};

export const getAuditoriaSocial= async () => {
    const res = await fetch(`${BASE_URL}/social-security/triggers`);
    return res.json();
};

export const getAuditoriaVacacion= async () => {
    const res = await fetch(`${BASE_URL}/vacations/triggers`);
    return res.json();
};