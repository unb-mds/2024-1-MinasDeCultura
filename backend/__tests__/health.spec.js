const request = require('supertest');
const app = 'https://minas-cultura-api.onrender.com';

describe('Testes do Endpoint de Health', () => {
  it('Deve retornar "OK"', async () => {

    const res = await request(app)
    .get(`/health`)
    .expect('Content-Type', /json/)
    .expect(200);

    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    });
  });
