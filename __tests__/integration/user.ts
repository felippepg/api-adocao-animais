import request from 'supertest'
import app from '../../src/app'

describe('Create Users', () => {
  it.skip('Should not create user', async () => {
    const response = await request(app).post('/register').send({
      name: 'Felippe',
    })
    expect(response.body).toEqual('Invalid Values')
  })

  it.skip('Should create user', async () => {
    const response = await request(app).post('/register').send({
      name: 'Felippe',
      login: 'felippe.testador',
      password: '2502',
    })
    console.log(response.body)
  })

  it.skip('Should verify if user exists', async () => {
    const response = await request(app).post('/register').send({
      name: 'Felippe',
      login: 'felippe.testador',
      password: '2502',
    })
    expect(response.body).toBe('User already exists')
  })

  it('Should authorized', async () => {
    const response = await request(app)
      .get('/users')
      .set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3NzQ4MDExLCJleHAiOjE2Mzc4MzQ0MTF9.7YbsTy6GptDXgXTBCQBzWmXjMzr3btjMdV1yXzhKr4A`
      )

    expect(response.body).toBe('Token is required')
  })
})
