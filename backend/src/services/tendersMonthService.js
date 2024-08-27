const supabase = require('../config/supabaseClient');

async function getTendersByMonth(start, end) {
    const startYear = Math.floor(start / 100);
    const startMonth = start % 100;
    const endYear = Math.floor(end / 100);
    const endMonth = end % 100;
    console.log(start)
    console.log(end)
    console.log(startYear)
    console.log(startMonth)
    console.log(endYear)
    console.log(endMonth)

    const { data, error } = await supabase
        .from('tendersmonth')
        .select('*')
        .gte('year', startYear)
        .lte('year', endYear)
        .gte('month', startMonth)
        .lte('month', endMonth);
    
    if (error) {
        throw new Error(error.message);
    }
    
    return data;
}

module.exports = {
    getTendersByMonth,
};

