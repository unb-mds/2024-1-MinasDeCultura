const supabase = require('../config/supabaseClient')

async function getAllUnits() {
  const { data, error } = await supabase
    .from('administrative_units')
    .select('*')

  if (error) {
    throw new Error('Error fetching units: ' + error.message)
  }

  return data
}

module.exports = { getAllUnits }
