const { Client } = require('pg');

const client = new Client({
    host: 'postgres',
    port: 5432,
    user: 'docker',
    password: 'docker',
    database: 'test_db',
});

(async () => {
    try {
        await client.connect();
        console.log('Conectando ao Pg');

        const query = `
            CREATE TABLE IF NOT EXISTS licitacoes (
                unidade_adm VARCHAR(255),
                valor_empenhado NUMERIC,
                valor_liquidado NUMERIC,
                valor_pago NUMERIC,
                ano INTEGER,
                mes INTEGER,
                cidade VARCHAR(255),
                PRIMARY KEY (unidade_adm, mes, ano, cidade)
            );
        `;
        await client.query(query);
        console.log('Database criado com sucesso!')
    } catch (err) {
        console.error('Erro ao criar database: ', err);
    } finally {
        await client.end();
    }
})();