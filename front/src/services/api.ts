import axios from 'axios';

interface SearchParams {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
  cityId: number;
}

export const fetchCities = async () => {
  try {
    const response = await axios.get('http://localhost:5000/cities');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cidades:', error);
    throw error;
  }
};

export const searchLicitacoes = async (params: SearchParams) => {
  const { startYear, startMonth, endYear, endMonth, cityId } = params;
  
  const url = `http://localhost:5000/tenders?start=${startYear}${startMonth}&end=${endYear}${endMonth}&city=${cityId}`;
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar licitações:', error);
    throw error;
  }
};
