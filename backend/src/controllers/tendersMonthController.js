const tendersMonthService = require('../services/tendersMonthService');

async function getTendersByMonth(req, res) {
    const { start, end } = req.query;

    if(!start || !end) {
        return res.status(400).json({ error: "Data inicial e final são obrigatórios" });
    }

    if(start > end) {
        return res.status(400).json({ error: "A data inicial deve ser menor ou igual à data final" });
    }

    const startCompare = parseInt(start);
    const endCompare = parseInt(end);

    try {
        const tenders = await tendersMonthService.getTendersByMonth(startCompare, endCompare);

        if (tenders.length > 0) {
            res.json(tenders);
        } else {
            res.status(400).json({ message: "Nenhum dado encontrado para o intervalo de datas informado" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getTendersByMonth,
};