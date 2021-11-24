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
      name: 'Jessica',
      login: 'jessica.pires',
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

  it.skip('Should authorized', async () => {
    const response = await request(app)
      .get('/users')
      .set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3NzQ4MDExLCJleHAiOjE2Mzc4MzQ0MTF9.7YbsTy6GptDXgXTBCQBzWmXjMzr3btjMdV1yXzhKr4A`
      )

    expect(response.body).toBe('Token is required')
  })

  it.skip('Should update user', async () => {
    const response = await request(app).post('/user/1').send({
      name: 'Felippe Gonçalves',
      login: '',
    })

    expect(response.status).toBe(201)
  })

  it.skip('Should not update user with a invalid ID', async () => {
    const response = await request(app).post('/user/45').send({
      name: 'Felippe Gonçalves',
      login: 'teste',
    })

    expect(response.body).toBe('User not found')
  })

  it.skip('Should return all users', async () => {
    const response = await request(app).get('/users')
    expect(response.body).toEqual([
      { name: 'Felippe Gonçalves', login: 'felippe.goncalves' },
    ])
  })

  it.skip('Should return one user', async () => {
    const response = await request(app).get('/user/2')
    expect(response.body).toEqual({ name: 'Jessica', login: 'jessica.pires' })
  })

  it('Should delete user', async () => {
    const response = await request(app).delete('/user/2')
    expect(response.body).toEqual('Deleted user')
  })
})
