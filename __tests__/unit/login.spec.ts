import app from '../src/app'
import request from 'supertest'
describe('User Auth', () => {
  it.skip('Should authenticate user', async () => {
    const response = await request(app).post('/login').send({
      login: 'felippe.testador',
      password: '2502',
    })
    expect(response.body).toEqual('Olá')
  })
})
