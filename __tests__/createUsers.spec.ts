import request from 'supertest'
import app from '../src/app'

describe('Create Users', () => {
  it('Should not create user', async () => {
    const response = await request(app).post('/register').send({
      name: 'Felippe',
    })
    expect(response.body).toEqual('Invalid Values')
  })

  it('Should create user', async () => {
    const response = await request(app).post('/register').send({
      name: 'Felippe',
      login: 'felippe.testador',
      password: '2502',
    })
    console.log(response.body)
  })

  it('Should verify if user exists', async () => {
    const response = await request(app).post('/register').send({
      name: 'Felippe',
      login: 'felippe.testador',
      password: '2502',
    })
    expect(response.body).toBe('User already exists')
  })
})
