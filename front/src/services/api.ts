import axios from 'axios';

interface SearchData {
  subject: string;
  location: string;
  startMonth: number | null;
  startYear: string | null;
  endMonth: number | null;
  endYear: string | null;
}

export const searchLicitacoes = async (data: SearchData) => {
  const { startMonth, startYear, endMonth, endYear, location } = data;
  
  // "city" foi alterado para "1" para mostrar que a requisição deve ser feita com o id da cidade, e não com o nome dela
  const url = `http://localhost:5000/tenders?start=${startYear}${startMonth}&end=${endYear}${endMonth}&city=1`;
  console.log(url)
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar licitações:', error);
    throw error;
  }
};
