const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'docker',
    password: 'docker',
    database: 'test_db',
});

module.exports = pool;