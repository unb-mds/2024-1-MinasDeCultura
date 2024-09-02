const supabase = require('../config/supabaseClient');

async function getTendersByYear(year) {
    const { data, error } = await supabase
        .from('tendersyear')
        .select('year, liquidated_value, committed_value, paid_value')
        .eq('year', year);
    
    if (error) {
        throw new Error(error.message);
    }
    
    return data;
}

module.exports = {
    getTendersByYear,
};

