const express = require('express');
const pool = require('./db');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/licitacoes', async (req, res) => {
    const { inicio, fim, cidade } = req.query;

    if (!inicio || !fim || !cidade) {
        return res.status(400).json({ error: "Data inicial, data final e cidade são obrigatórias" });
    }
    if (inicio > fim) {
        return res.status(400).json({ error: "A data inicial deve ser menor ou igual à data final" });
    }
    const inicioComparacao = parseInt(inicio);
    const fimComparacao = parseInt(fim);

    try {
        const query = `
            SELECT * FROM licitacoes WHERE 
            (CAST(ano AS INTEGER) * 100 + CAST(mes AS INTEGER)) BETWEEN $1 AND $2
            AND cidade = $3
        `;
        
        const result = await pool.query(query, [inicioComparacao, fimComparacao, cidade]);
        
        if (result.rows.length > 0) {
            res.json(result.rows);
        } else {
            res.status(404).json({ message: "Nenhum dado encontrado para o intervalo de datas informado" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
