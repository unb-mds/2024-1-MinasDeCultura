const supabase = require('../config/supabaseClient');

async function getTendersByCityAndDate(start, end, cityId) {
  const startAno = Math.floor(start / 100) % 100;  // Extrai os últimos dois dígitos do ano
  const startMes = start % 100;
  const endAno = Math.floor(end / 100) % 100;
  const endMes = end % 100;

  const { data, error } = await supabase
    .from('tenders')
    .select('*')
    .gte('year', startAno)
    .lte('year', endAno)
    .gte('month', startMes)
    .lte('month', endMes)
    .eq('city_id', cityId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

module.exports = {
  getTendersByCityAndDate,
};
