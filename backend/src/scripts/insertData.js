const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })

const fs = require('fs')
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error('SUPABASE_URL and SUPABASE_KEY are required in the .env file.')
  }

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

async function main() {
  try {

    const data = JSON.parse(fs.readFileSync('../../webscrapy/minas_de_cultura_scrapy/despesas.json', 'utf-8'))
    
    for (const item of data) {
      const unidadeAdm = item["Unidade administrativa"]
      const cidade = item["cidade"]
      const valorEmpenhado = parseFloat(item["Valor empenhado"].replace(/[.,]/g, match => (match === '.' ? '' : '.')))
      const valorLiquidado = parseFloat(item["Valor liquidado"].replace(/[.,]/g, match => (match === '.' ? '' : '.')))
      const valorPago = parseFloat(item["Valor pago"].replace(/[.,]/g, match => (match === '.' ? '' : '.')))
      const ano = parseInt(item["ano"], 10)
      const mes = parseInt(item["mes"], 10)
      
      // Inserir ou obter o ID da unidade administrativa
      let { data: unidadeAdmData, error: unidadeAdmError } = await supabase
        .from('administrative_units')
        .select('id')
        .eq('name', unidadeAdm)
        .single()

      if (unidadeAdmError || !unidadeAdmData) {
        const { data, error } = await supabase
          .from('administrative_units')
          .insert([{ name: unidadeAdm }])
          .single()
        unidadeAdmData = data
      }
      
      const unidadeAdmId = unidadeAdmData.id

      // Inserir ou obter o ID da cidade
      let { data: cidadeData, error: cidadeError } = await supabase
        .from('cities')
        .select('id')
        .eq('name', cidade)
        .single()

      if (cidadeError || !cidadeData) {
        const { data, error } = await supabase
          .from('cities')
          .insert([{ name: cidade }])
          .single()
        cidadeData = data
      }
      
      const cidadeId = cidadeData.id

      // Inserir a licitação se não existir
      await insertTender(unidadeAdmId, cidadeId, valorEmpenhado, valorLiquidado, valorPago, ano, mes)
    }
  } catch (error) {
    console.error('Erro ao inserir Licitações:', error)
  }
}

async function insertTender(unidadeAdmId, cidadeId, valorEmpenhado, valorLiquidado, valorPago, ano, mes) {
  // Verificar se a licitação já existe
  const { data: existingTender, error: selectError } = await supabase
    .from('tenders')
    .select('id')
    .eq('administrative_unit_id', unidadeAdmId)
    .eq('city_id', cidadeId)
    .eq('year', ano)
    .eq('month', mes)
    .single()

  if (selectError && selectError.code !== 'PGRST116') { // Se houver erro que não seja "No rows found"
    console.error('Error checking existing tender:', selectError)
    return
  }

  if (existingTender) {
    console.log('Tender already exists, skipping insertion')
    return
  }

  // Inserir a licitação se não existir
  const { data, error } = await supabase
    .from('tenders')
    .insert([
      {
        administrative_unit_id: unidadeAdmId,
        city_id: cidadeId,
        committed_value: valorEmpenhado,
        liquidated_value: valorLiquidado,
        paid_value: valorPago,
        year: ano,
        month: mes
      }
    ])

  if (error) {
    console.error('Error inserting tender:', error)
  } else {
    console.log('Tender inserted successfully:', data)
  }
}


main()
