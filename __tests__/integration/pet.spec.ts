import request from 'supertest'
import app from '../../src/app'
describe('Pet cadastro', () => {
  it.skip('Should add pet', async () => {
    const response = await request(app).post('/pet/add').send({
      name: 'Lola',
      sexId: 1,
      age: '9 anos',
      bio: 'Essa é uma bio',
      situationId: 1,
      typeId: 1,
    })
    expect(response.body).toEqual({
      id: 1,
      name: 'Lola',
      sexId: 1,
      age: '9 anos',
      bio: 'Essa é uma bio',
      situationId: 1,
      typeId: 1,
    })
  })

  it('Should show all pets', async () => {
    const response = await request(app).get('/pets')

    expect(response.body).toEqual([
      {
        id: 2,
        name: 'Lola',
        sexId: 1,
        age: '9 anos',
        bio: 'Essa é uma bio',
        situationId: 1,
        typeId: 1,
      },
    ])
  })
})
