const supabase = require('../config/supabaseClient');

async function getTendersByMonth(start, end) {
    const startYear = Math.floor(start / 100);
    const startMonth = start % 100;
    const endYear = Math.floor(end / 100);
    const endMonth = end % 100;

    const { data, error } = await supabase
        .from('tendersmonth')
        .select('*')
        .or(
          `and(year.eq.${startYear},month.gte.${startMonth}),` +
          `and(year.gt.${startYear},year.lt.${endYear}),` +
          `and(year.eq.${endYear},month.lte.${endMonth})`
        );

    if (error) {
        throw new Error(error.message);
    }
    
    return data;
}

module.exports = {
    getTendersByMonth,
};