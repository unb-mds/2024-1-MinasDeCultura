const request = require('supertest');
const app = 'http://localhost:5000';


describe('Testes do Endpoint de Cidades', () => {
    it('Deve receber as cidades', async () => {
        const res = await request(app).get(`/cities`)
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);

        res.body.forEach(city => {
            expect(city).toHaveProperty('id');
            expect(city).toHaveProperty('name');
            expect(typeof city.id).toBe('number');
            expect(typeof city.name).toBe('string');
        });
});

    it('Deve receber uma mensagem de erro quando fizer uma requisição inválida', async () => {
        const res = await request(app).get('/city');
        expect(res.status).toBe(404);
        expect(res.body).toBeDefined();
    })
});