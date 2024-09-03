const request = require('supertest');
const app = 'http://localhost:5000';


describe('Testes da API de Unidades Administrativas', () => {
    it('Deve receber as unidades administrativas', async () => {
        const res = await request(app).get(`/units`)
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);

        res.body.forEach(unit => {
            expect(unit).toHaveProperty('id');
            expect(unit).toHaveProperty('name');
            expect(typeof unit.id).toBe('number');
            expect(typeof unit.name).toBe('string');
        });
});

    it('Deve receber uma mensagem de erro quando fizer uma requisição inválida', async () => {
        const res = await request(app).get('/unitz');
        expect(res.status).toBe(404);
        expect(res.body).toBeDefined();
    })
});