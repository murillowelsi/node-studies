const assert = require('assert')
const { getCharacters } = require('./service')
// Instalamos o pacote nock para simular os resultados
const nock = require('nock')


describe('Star Wars Tests', () => {
  before(() => {
    const response = {
        message: 'ok',
        result: [{
          properties: {
            height: '202',
            mass: '136',
            hair_color: 'none',
            skin_color: 'white',
            eye_color: 'yellow',
            birth_year: '41.9BBY',
            gender: 'male',
            created: '2021-01-12T22:54:45.434Z',
            edited: '2021-01-12T22:54:45.434Z',
            name: 'Darth Vader',
            homeworld: 'https://www.swapi.tech/api/planets/1',
            url: 'https://www.swapi.tech/api/people/4'
          },
          description: 'A person within the Star Wars universe',
          _id: '5f63a36eee9fd7000499be45',
          uid: '4',
          __v: 0
        }]
    }
  
    nock('https://www.swapi.tech/api')
      .get('/people/4')
      .reply(200, response)
  })

  it('Deve buscar todos os personagens', async () => {
    const expected = [{ 
      nome:"Darth Vader", 
      dataNascimento: "41.9BBY"
    }]
    const id = 4

    const resultado = await getCharacters(id)

    assert.deepStrictEqual(resultado, expected)
  })
})