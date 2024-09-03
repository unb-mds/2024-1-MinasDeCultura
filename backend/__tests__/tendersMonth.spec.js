const request = require('supertest');
const app = 'https://minas-cultura-api.onrender.com';

describe('Testes do Endpoint de Licitações Mensais', () => {
  it('Deve retornar licitações no intervalo de tempo fornecido', async () => {
    const startYear = '2023';
    const startMonth = '01';
    const endYear = '2023';
    const endMonth = '06';

    const res = await request(app)
    .get(`/tenders?start=${startYear}${startMonth}&end=${endYear}${endMonth}`)
    .expect('Content-Type', /json/)
    .expect(200);

    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach(tender => {
      expect(tender).toHaveProperty('id');
      expect(tender).toHaveProperty('committed_value');
      expect(tender).toHaveProperty('liquidated_value');
      expect(tender).toHaveProperty('paid_value');
      expect(tender).toHaveProperty('year');
      expect(tender).toHaveProperty('month');
    });
  });

  it('Deve retornar um erro quando a data não for fornecida', async () => {

    const res = await request(app)
      .get(`/tenders?start=&end=`);
    
    expect(res.status).toBe(400);
    expect(res.body).toBeDefined();
  });
});
