const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

describe('Configuração do Banco de Dados', () => {
  it('Deve carregar as variáveis de ambiente corretamente', () => {
    expect(process.env.SUPABASE_URL).toBeDefined();
    expect(process.env.SUPABASE_KEY).toBeDefined();
  });

  it('Deve criar o cliente Supabase corretamente', () => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    expect(supabase).toBeDefined();
    expect(supabase.auth).toBeDefined(); // Verifica se a autenticação está disponível
    expect(supabase.from).toBeDefined(); // Verifica se o método from está disponível
  });
});
