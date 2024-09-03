const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// * [Deprecated] *
// const citiesRoutes = require('./routes/citiesRoutes');
// const unitsRoutes = require('./routes/unitsRoutes');

const tendersMonthRoutes = require('./routes/tendersMonthRoutes');
const tendersYearRoutes = require('./routes/tendersYearRoutes');
const healthRoutes = require('./routes/healthRoutes');

app.use(cors())

// * [Deprecated] *
// app.use('/cities', citiesRoutes)
// app.use('/units', unitsRoutes)

app.use('/tenders', tendersMonthRoutes)
app.use('/tenders/year', tendersYearRoutes)
app.use('/health', healthRoutes)

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`)
})
