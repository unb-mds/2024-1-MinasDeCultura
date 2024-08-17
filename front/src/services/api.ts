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
  
  const url = `http://localhost:5000/licitacoes?inicio=${startYear}${startMonth}&fim=${endYear}${endMonth}&cidade=${encodeURIComponent(location)}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar licitações:', error);
    throw error;
  }
};
