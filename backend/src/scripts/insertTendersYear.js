const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('SUPABASE_URL and SUPABASE_KEY are required in the .env file.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    try {
        const data = JSON.parse(fs.readFileSync('../../raspadores/Selenium_transparencia/selenium_portal_transparencia_anos.json', 'utf-8'));

        for (const item of data) {
            const committed_value = parseFloat(item["Valor Empenhado"].replace(/[.,]/g, match => (match === '.' ? '' : '.')));
            const liquidated_value = parseFloat(item["Valor Liquidado"].replace(/[.,]/g, match => (match === '.' ? '' : '.')));
            const paid_value = parseFloat(item["Valor Pago"].replace(/[.,]/g, match => (match === '.' ? '' : '.')));
            const year = parseInt(item["Ano"], 10);

            // Inserir a licitação se não existir
            await insertTender(committed_value, liquidated_value, paid_value, year);
        }
    } catch (error) {
        console.error('Erro ao inserir Licitações:', error);
    }
}

async function insertTender(committed_value, liquidated_value, paid_value, year) {
    // Verificar se a licitação já existe
    const { data: existingTender, error: selectError } = await supabase
        .from('tendersyear')
        .select('id')
        .eq('year', year)
        .single();

    if (selectError && selectError.code !== 'PGRST116') {
        console.error('Erro ao verificar Licitações:', selectError);
        return;
    }

    if (existingTender) {
        console.log('A licitação já existe, pulando inserção');
        return;
    }

    const { data, error } = await supabase
        .from('tendersyear')
        .insert([
            {
                committed_value: committed_value,
                liquidated_value: liquidated_value,
                paid_value: paid_value,
                year: year,
            }
        ]);

    if (error) {
        console.error('Erro ao inserir as licitações:', error);
    } else {
        console.log('Licitações inseridas com sucesso:', data);
    }
}

main();
