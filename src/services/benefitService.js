import axios from 'axios';

const  API_URL ='http://localhost:8082/api/benefits';

export const getBeneficio = async () => {
    try{
        const response = await axios.get(API_URL);
        return response.data;
    }catch(error){
        console.error('Error al obtener los Beneficios: ', error);
        return[]
    }
}
export const createBeneficio = async (nuevoBeneficio) => {
    try{
        const response = await axios.post(API_URL, nuevoBeneficio);
        return response.data;
    }catch(error){
        console.error('Error al obtener los Beneficios: ', error);
        throw error;
    }
}