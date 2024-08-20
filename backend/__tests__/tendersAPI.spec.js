const request = require('supertest');
const app = 'http://localhost:5000';

describe('Testes do Endpoint de Licitações', () => {
  it('Deve retornar licitações para a cidade específica no intervalo de tempo fornecido', async () => {
    const startYear = '23';
    const startMonth = '01';
    const endYear = '23';
    const endMonth = '06';
    const cityId = 1;

    const res = await request(app)
    .get(`/tenders?start=${startYear}${startMonth}&end=${endYear}${endMonth}&city=${cityId}`)
    .expect('Content-Type', /json/)
    .expect(200);

    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach(tender => {
      expect(tender).toHaveProperty('id');
      expect(tender).toHaveProperty('administrative_unit_id');
      expect(tender).toHaveProperty('city_id');
      expect(tender).toHaveProperty('committed_value');
      expect(tender).toHaveProperty('liquidated_value');
      expect(tender).toHaveProperty('paid_value');
      expect(tender).toHaveProperty('year');
      expect(tender).toHaveProperty('month');
      expect(typeof tender.id).toBe('number');
      expect(typeof tender.administrative_unit_id).toBe('number');
    });
  });

  it('Deve retornar um erro quando a cidade não for fornecida', async () => {
    const startYear = '23';
    const startMonth = '01';
    const endYear = '23';
    const endMonth = '06';

    const res = await request(app)
      .get(`/tenders?start=${startYear}${startMonth}&end=${endYear}${endMonth}`);
    
    expect(res.status).toBe(400);
    expect(res.body).toBeDefined();
  });
});
