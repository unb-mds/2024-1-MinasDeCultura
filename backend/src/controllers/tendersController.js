const tendersService = require('../services/tendersService');

async function getTendersByCityAndDate(req, res) {
  const { start, end, city } = req.query;

  if (!start || !end || !city) {
    return res.status(400).json({ error: "Data inicial, data final e cidade são obrigatórias" });
  }

  if (start > end) {
    return res.status(400).json({ error: "A data inicial deve ser menor ou igual à data final" });
  }

  const startCompare = parseInt(start);
  const endCompare = parseInt(end);
  const cityId = parseInt(city);

  try {
    const tenders = await tendersService.getTendersByCityAndDate(startCompare, endCompare, cityId);

    if (tenders.length > 0) {
      res.json(tenders);
    } else {
      res.status(404).json({ message: "Nenhum dado encontrado para o intervalo de datas informado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getTendersByCityAndDate,
};
