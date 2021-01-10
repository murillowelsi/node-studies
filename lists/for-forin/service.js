const axios = require ('axios')
const URL = `https://www.swapi.tech/api/people`

async function getCharacters (id) {
  const url = `${URL}/${id}`
  const response = await axios.get(url)

  return response.data
}


module.exports = {
  getCharacters
}