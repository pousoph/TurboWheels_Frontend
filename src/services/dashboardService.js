export const getTotalEmpleados = async () => {
    try {
        const response = await fetch("http://localhost:8082/api/employees/total");
        if (!response.ok) throw new Error("Error al obtener total de empleados");
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return 0;
    }
};
export const getTotalNominas = async () => {
    try {
        const response = await fetch("http://localhost:8082/api/payrolls/total");
        if (!response.ok) throw new Error("Error al obtener total de nóminas");
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return 0;
    }
};
export const getTotalContratos = async () => {
    try {
        const response = await fetch("http://localhost:8082/api/contracts/total");
        if (!response.ok) throw new Error("Error al obtener total de contratos");
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return 0;
    }
};
