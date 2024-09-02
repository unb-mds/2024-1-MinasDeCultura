const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

const citiesRoutes = require('./routes/citiesRoutes');
const tendersMonthRoutes = require('./routes/tendersMonthRoutes');
const tendersYearRoutes = require('./routes/tendersYearRoutes');
const tendersRoutes = require('./routes/tendersRoutes');
const unitsRoutes = require('./routes/unitsRoutes');

app.use(cors())

app.use('/cities', citiesRoutes)
app.use('/tenders', tendersMonthRoutes)
app.use('/tenders/year', tendersYearRoutes)
app.use('/units', unitsRoutes)

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`)
})
