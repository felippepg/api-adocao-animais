import app from '../../src/app'
import request from 'supertest'
describe('Pet situation', () => {
  it.skip('Should add animal situation', async () => {
    const response = await request(app).post('/situation/add').send({
      situation: 'ADOTADO',
    })

    expect(response.body).toEqual({ id: 1, name: 'ADOTADO' })
  })

  it.skip('Should show all situations', async () => {
    const response = await request(app).get('/situations')

    expect(response.body).toEqual([{ id: 2, name: 'ADOTADO' }])
  })

  it.skip('Should show one specific situation', async () => {
    const response = await request(app).get('/situation/2')

    expect(response.body).toEqual({ id: 2, name: 'ADOTADO' })
  })

  it.skip('Should delete a animal situation', async () => {
    const response = await request(app).delete('/situation/1/delete')

    expect(response.body).toBe('Deleted situation')
  })
})
