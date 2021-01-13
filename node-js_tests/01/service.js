const { get } = require('axios')

const URL = `https://www.swapi.tech/api`

async function getCharacters(id) {
  const url = `${URL}/people/${id}`
  const result = await get(url)
  return result.data.result.map(mapCharacters)
}

function mapCharacters(item) {
  return {
    nome: item.properties.name,
    dataNascimento: item.properties.birth_year
  }
}

module.exports = {
  getCharacters
}