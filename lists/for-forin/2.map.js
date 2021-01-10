const service = require('./service')

async function main() {
  try {
    const response = await service.getCharacters('')

    // const names = []

    // response.results.forEach(function (item) {
    //   names.push(item.name)
    // })

    // const names = response.results.map(function (character) {
    //   return character.name
    // })

    const names = response.results.map((character) => character.name)

    console.log('names', names)
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()