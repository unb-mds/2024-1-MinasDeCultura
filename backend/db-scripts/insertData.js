const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'docker',
  password: 'docker',
  database: 'test_db',
});

function formatValue(value) {
  if (typeof value !== 'string') {
    value = value.toString();
  }
  // Remove os pontos
  let formattedValue = value.replace(/\./g, '');
  // Substitui a vírgula por ponto
  formattedValue = formattedValue.replace(',', '.');
  return formattedValue;
}

(async () => {
  try {
    await client.connect();
    console.log('Conectando ao Postgre');
    const data = JSON.parse(fs.readFileSync('../webscrapy/minas_de_cultura_scrapy/resultado.json', 'utf-8'));

    // Loop de inserção no banco de dados
    for (const item of data) {
      
      const { 
        "Unidade administrativa": unidade_adm,
        "Valor empenhado": valor_empenhado,
        "Valor liquidado": valor_liquidado,
        "Valor pago": valor_pago,
        "ano": ano,
        "mes": mes,
        "cidade": cidade 
      } = item;
    
      const query = `
          INSERT INTO licitacoes (unidade_adm, valor_empenhado, valor_liquidado, valor_pago, ano, mes, cidade)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          ON CONFLICT (unidade_adm, mes, ano, cidade) DO NOTHING;
      `;
      const values = [
        unidade_adm ? unidade_adm.toString().substring(0, 255) : null,
        valor_empenhado ? parseFloat(formatValue(valor_empenhado)) : null,
        valor_liquidado ? parseFloat(formatValue(valor_liquidado)) : null,
        valor_pago ? parseFloat(formatValue(valor_pago)) : null,
        ano ? parseInt(ano) : null,
        mes ? parseInt(mes) : null,
        cidade ? cidade.toString().substring(0, 255) : null
      ];

      await client.query(query, values);
    }

    console.log('Dados inseridos com sucesso');
  } catch (err) {
    console.error('Erro ao inserir dados:', err);
  } finally {
    await client.end();
  }
})();
