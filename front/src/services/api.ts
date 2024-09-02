import axios from 'axios';

interface SearchParams {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
}

export const fetchCities = async () => {
  try {
    const response = await axios.get('http://localhost:5000/cities');
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const fetchUnits = async () => {
  try {
    const response = await axios.get('http://localhost:5000/units');
    return response.data;
  } catch (error) {
    console.error('Error fetching units:', error);
    throw error;
  }
};

export const fetchYearlyTendersData = async () => {
    try {
        const requests = [];
        for (let year = 2002; year <= 2023; year++) {
            requests.push(axios.get(`https://minas-cultura-api.onrender.com/tenders/year?year=${year}`));
        }
        const responses = await Promise.all(requests);
        return responses.flatMap((response) => response.data);
    } catch (error) {
        console.error('Erro ao buscar dados anuais:', error);
        return [];
    }
};

/* pra quando a API remota estiver com a lógica certa*/
export const fettchYearAndMonthTender = async (params: SearchParams) => {
  const { startYear, startMonth, endYear, endMonth } = params;
  
  const url = `https://minas-cultura-api.onrender.com/tenders?start=${startYear}${startMonth}&end=${endYear}${endMonth}`;
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error searching tenders:', error);
    throw error;
  }
};
