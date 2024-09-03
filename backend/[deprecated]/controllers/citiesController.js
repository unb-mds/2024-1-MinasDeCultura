const { getAllCities } = require('../services/citiesService')

async function getCities(req, res) {
  try {
    const cities = await getAllCities()
    res.json(cities)
  } catch (error) {
    console.error('Error fetching cities:', error)
    res.status(500).json({ error: 'Failed to fetch cities' })
  }
}

module.exports = { getCities }
