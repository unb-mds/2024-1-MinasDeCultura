const { Client } = require('pg');
const fs = require('fs');

// Config de conexao do postgre
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'docker',
  password: 'docker',
  database: 'test_db',
});

(async () => {
  try {
    await client.connect();
    console.log('Conectando ao Postgre');

    // lendo o JSON
    const data = JSON.parse(fs.readFileSync('../webscrapy/minas_de_cultura_scrapy/resultado.json', 'utf-8'));
    // loop de inserção no banco de dados
    for (const item of data) {
      
      const { unidade_adm, mes, ano, valor_empenhado, valor_liquidado, valor_pago} = item;
    
      const query = `
          INSERT INTO licitacoes (unidade_adm, mes, ano, valor_empenhado, valor_liquidado, valor_pago)
          VALUES ($1, $2, $3, $4, $5, $6)
          ON CONFLICT (unidade_adm, mes, ano) DO NOTHING;
      `;
      const values = [
        unidade_adm ? unidade_adm.toString().substring(0, 255) : null,
        mes ? mes.toString().substring(0, 255) : null,
        ano ? parseInt(ano) : null,
        valor_empenhado ? parseFloat(valor_empenhado) : null,
        valor_liquidado ? parseFloat(valor_liquidado) : null,
        valor_pago ? parseFloat(valor_pago) : null
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