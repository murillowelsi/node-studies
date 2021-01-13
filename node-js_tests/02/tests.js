const assert = require('assert')
const { 
  getAffiliates,
  getLastTraning
 } = require('./service')
const nock = require('nock')

describe('Api returns a affiliates list', () => {
  before(() => {
    const response = {
      affiliates: [
        { id: 1, name: "Murillo Welsi", status: "active", last_training: 123, goal: "Emagrecer", modality: "Corrida" }
      ]
    }
    
    nock('https://trainingcoach.com')
      .get('/alunos/1')
      .reply(200, response)
  })

  it('should return the id 1', async () => {
    const expected = [{
      alunos: [{ 
        id: 1, 
        nome: "Murillo Welsi", 
        objetivo: "Emagrecer", 
        modalidade: "Corrida" 
      }]
    }] 

    const id = 1

    const resultado = await getAffiliates(id)

    assert.deepStrictEqual(resultado, expected)
  })
})

describe('Api returns a affiliates list', () => {
  before(() => {
    const response = {
      affiliates: [
        { id: 1, name: "Murillo Welsi", status: "active", last_training: 123, goal: "Emagrecer", modality: "Corrida" }
      ]
    }
    
    nock('https://trainingcoach.com')
      .get('/alunos/1')
      .reply(200, response)
  })
  
  it('should return the last training day', async () => {
    const expected = [{
      alunos: [{ 
        id: 1, 
        nome: "Murillo Welsi", 
        ultimoTreino: 123
      }]
    }]

    const id = 1

    const resultado = await getLastTraning(id)

    assert.deepStrictEqual(resultado, expected)
  })
})