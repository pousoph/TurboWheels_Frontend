export const descargarPDFEmpleados = async () => {
    try {
        const response = await fetch("http://localhost:8082/api/pdf/empleados", {
            method: "GET",
            headers: {
                Accept: "application/pdf",
            },
        });

        if (!response.ok) {
            throw new Error("Error al generar PDF");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "reporte_empleados.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error al descargar el PDF de empleados:", error);
    }
}
export const descargarPDFContratos = async () => {
    try {
        const response = await fetch("http://localhost:8082/api/pdf/contratos", {
            method: "GET",
            headers: {
                Accept: "application/pdf",
            },
        });

        if (!response.ok) {
            throw new Error("Error al generar PDF de contratos");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "reporte_contratos.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error al descargar el PDF de contratos:", error);
    }
};
export const descargarPDFNomina = async () => {
    try {
        const response = await fetch("http://localhost:8082/api/pdf/nomina", {
            method: "GET",
            headers: {
                Accept: "application/pdf",
            },
        });

        if (!response.ok) {
            throw new Error("Error al generar PDF de nómina");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "reporte_nomina.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error al descargar el PDF de nómina:", error);
    }
};
