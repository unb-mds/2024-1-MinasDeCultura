const supabase = require('../config/supabaseClient')

async function getAllCities() {
  const { data, error } = await supabase
    .from('cities')
    .select('*')

  if (error) {
    throw new Error('Erro ao buscar cidades: ' + error.message)
  }

  return data
}

module.exports = { getAllCities }
