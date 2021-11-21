import app from '../src/app'
import request from 'supertest'
describe('User Auth', () => {
  it('Should authenticate user', () => {
    const response = await request(app).post('/login')

    expect(response.body).toBe('Olá')
  })
})
