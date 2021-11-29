import app from '../../src/app'
import request from 'supertest'
describe('Pet Type', () => {
  it.skip('Should add animal type', async () => {
    const response = await request(app).post('/type/add').send({
      type: 'cachorro',
    })

    expect(response.body).toEqual({ id: 1, name: 'CACHORRO' })
  })

  it.skip('Should show all types', async () => {
    const response = await request(app).get('/types')

    expect(response.body).toEqual([{ id: 1, name: 'CACHORRO' }])
  })

  it.skip('Should show one specific type', async () => {
    const response = await request(app).get('/type/1')

    expect(response.body).toEqual({ id: 1, name: 'CACHORRO' })
  })

  it.skip('Should update a type of animal', async () => {
    const response = await request(app).put('/type/1/edit').send({
      name: 'gato',
    })

    expect(response.body).toEqual({ id: 1, name: 'GATO' })
  })

  it.skip('Should delete a animal type', async () => {
    const response = await request(app).delete('/type/1/delete')

    expect(response.body).toBe('Deleted type')
  })
})
