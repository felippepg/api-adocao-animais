import app from '../src/app'
import request from 'supertest'
describe('User Auth', () => {
<<<<<<< HEAD
  it('Should authenticate user', async () => {
=======
  it.only('Should authenticate user', async () => {
>>>>>>> main
    const response = await request(app).post('/login')

    expect(response.body).toEqual('Olá')
  })
})
