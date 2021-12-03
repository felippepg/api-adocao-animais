import app from '../../src/app'
import request from 'supertest'
describe('Pet sex', () => {
  it.skip('Should add animal sex', async () => {
    const response = await request(app).post('/sex/add').send({
      sex: 'masculino',
    })

    expect(response.body).toEqual({ id: 1, name: 'MASCULINO' })
  })

  it.skip('Should show all sex types', async () => {
    const response = await request(app).get('/sexs')

    expect(response.body).toEqual([{ id: 1, name: 'MASCULINO' }])
  })

  it.skip('Should show one specific pet sex', async () => {
    const response = await request(app).get('/sex/1')

    expect(response.body).toEqual({ id: 1, name: 'MASCULINO' })
  })

  it.skip('Should uptdate pet sex', async () => {
    const response = await request(app)
      .put('/sex/1/edit')
      .send({ sex: 'feminino' })

    expect(response.body).toEqual({ id: 1, name: 'FEMININO' })
  })

  it.skip('Should delete a animal sex', async () => {
    const response = await request(app).delete('/sex/1/delete')

    expect(response.body).toBe('Deleted sex')
  })
})
