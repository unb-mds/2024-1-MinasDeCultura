const supabase = require('../config/supabaseClient');

async function getTendersByMonth(start, end) {
    const startYear = Math.floor(start / 100);
    const startMonth = start % 100;
    const endYear = Math.floor(end / 100);
    const endMonth = end % 100;

    let query = supabase.from('tendersmonth').select('*');

    if (startYear === endYear) {
        query = query
            .eq('year', startYear)
            .gte('month', startMonth)
            .lte('month', endMonth);
    } else {
        query = query
            .or(
                `and(year.eq.${startYear},month.gte.${startMonth}),` +
                `and(year.eq.${endYear},month.lte.${endMonth}),` +
                `and(year.gt.${startYear},year.lt.${endYear})`
            );
    }

    query = query.order('year', {ascending: true }).order('month', { ascending: true });

    const { data, error } = await query;

    if (error) {
        throw new Error(error.message);
    }
    
    return data;
}

module.exports = {
    getTendersByMonth,
};

