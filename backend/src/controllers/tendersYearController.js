const tendersYearService = require('../services/tendersYearService');

async function getTendersByYear(req, res) {
    const { year } = req.query;

    if(!year) {
        return res.status(400).json({ error: "Informe o ano de consulta" });
    }

    const yearInt = parseInt(year);
    if (isNaN(yearInt) || yearInt.toString().length !== 4){
        return res.status(400).json({ error: "Ano inválido. Informe um ano no formato YYYY."});
    }

    try {
        const tenders = await tendersYearService.getTendersByYear(yearInt);

        if (tenders.length > 0) {
            res.json(tenders);
        } else {
            res.status(404).json({ message: "Nenhum dado encontrado para o ano informado" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getTendersByYear,
};