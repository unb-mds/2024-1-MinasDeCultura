const request = require('supertest');
const app = 'https://minas-cultura-api.onrender.com';

describe('Testes do Endpoint de Licitações Anuais', () => {
  it('Deve retornar a licitação referente ao ano fornecido', async () => {
    const year = '2023';

    const res = await request(app)
    .get(`/tenders/year?year=${year}`)
    .expect('Content-Type', /json/)
    .expect(200);

    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach(tender => {
      expect(tender).toHaveProperty('committed_value');
      expect(tender).toHaveProperty('liquidated_value');
      expect(tender).toHaveProperty('paid_value');
      expect(tender).toHaveProperty('year');
    });
  });

  it('Deve retornar um erro quando a data não for fornecida', async () => {
    const year = null;

    const res = await request(app)
      .get(`/tenders/year?year=${year}`);
    
    expect(res.status).toBe(400);
    expect(res.body).toBeDefined();
  });
});
