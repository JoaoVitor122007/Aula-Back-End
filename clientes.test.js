const request = require('supertest')
const app = require('./index')

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send()
        expect(res.status).toBe(200)
    });
    it('verificar se a lista de clientes esta cheia', async () => {
        const res = await request(app).get('/clientes').send()
        expect(res.body).toBeDefined()
    })
})

describe('Atualizar /clientes', () => {
    it('criar cliente com sucesso', async () => {
        const res = await request(app).post('/clientes').send(
            {
                nome:'joao teste',
                email:'jaojao@gmail.com',
                senha:'12341234'
            })
    expect(res.status).toBe(200)
    })
})