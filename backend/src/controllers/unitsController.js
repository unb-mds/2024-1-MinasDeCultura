const { getAllUnits } = require('../services/unitsService')

async function getUnits(req, res) {
  try {
    const units = await getAllUnits()
    res.json(units)
  } catch (error) {
    console.error('Erro ao buscar Unidades:', error)
    res.status(500).json({ error: 'Falha ao buscar as unidades' })
  }
}

module.exports = { getUnits }
