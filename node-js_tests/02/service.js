const { get } = require('axios')

const URL = `https://trainingcoach.com`

async function getAffiliates(id) {
  const url = `${URL}/alunos/${id}`

  const result = await get(url)
  return result.data.affiliates.map(mapAthleteInfo)
}

async function getLastTraning(id) {
  const url = `${URL}/alunos/${id}`

  const result = await get(url)
  return result.data.affiliates.map(mapTrainingDays) 
}

function mapAthleteInfo(item) {
  return {
    alunos: [{ 
      id: item.id, 
      nome: item.name, 
      objetivo: item.goal, 
      modalidade: item.modality 
    }]
  } 
}

function mapTrainingDays(item) {
  return {
    alunos: [{
      id: item.id,
      nome: item.name,
      ultimoTreino: item.last_training
    }]
  }
}


module.exports = {
  getAffiliates,
  getLastTraning
}