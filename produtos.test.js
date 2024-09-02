const request = require('supertest')
const app = require('./index')

describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200)
    });
    it('veruficar se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.body).toBeDefined();
    })
})