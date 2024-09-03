const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY are required in the .env file.')
}

const supabase = createClient(supabaseUrl, supabaseKey)

const insertInitialData = async () => {
  const filePath = path.resolve(__dirname, '../../Montes_claros_selenium/despesas_montes_claros.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  const uniqueCities = new Set()
  const uniqueUnits = new Set()

  for (const item of data) {
    uniqueCities.add(item.cidade)
    uniqueUnits.add(item['Unidade administrativa'])
  }

  // Inserir cidades
  for (const city of uniqueCities) {
    const { data: cityData, error: cityError } = await supabase
      .from('cities')
      .upsert({ name: city }, { onConflict: ['name'] })

    if (cityError) {
      console.error(`Erro ao inserir cidade ${city}:`, cityError)
    }
  }

  // Inserir unidades administrativas
  for (const unit of uniqueUnits) {
    const { data: unitData, error: unitError } = await supabase
      .from('administrative_units')
      .upsert({ name: unit }, { onConflict: ['name'] })

    if (unitError) {
      console.error(`Erro ao inserir unidade administrativa ${unit}:`, unitError)
    }
  }
}

insertInitialData().catch(console.error)
