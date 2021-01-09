/* 
  0 - obter usuario
  1 - obter telefone do usuario a partir do seu ID
  2 - obter endereco do usuario a partir do seu ID
*/

function obterUsuario() {
  // qdo der algum problema -> reject(ERRO)
  // qdo der sucesso -> resolve
  return new Promise(function resolveUsuario(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Murillo Welsi",
        dataNascimento: "1989-07-24"
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolveTelefone(resolve, reject) {
    setTimeout(() => {
      return resolve({
        ddi: '+351',
        telefone: '910783561'
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario) {
  return new Promise(function resolveEndereco(resolve, reject) {
    setTimeout(() => {
      return resolve({
        rua: 'Rua do Sobreiro',
        numero: 122,
        complemento: '4 andar -  CTR TRS',
        pais: 'Portugal - Porto',
        freguesia: 'Sra da Hora'
      }, 2000)
    })
  })
}

main()
// 1 - adicionar a palavra async e ela automaticamente retornará uma Promise
async function main() {
  try {
    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEndereco(usuario.id)
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ])
    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log(
      `
      Nome: ${usuario.nome} - Telefone: ${telefone.ddi} ${telefone.telefone} 
      Data de nascimento: ${usuario.dataNascimento}
      Endereco: ${endereco.rua}, ${endereco.numero} - ${endereco.freguesia}, ${endereco.pais}
      `
    )

  } catch (error) {
    console.error('DEU RUIM', error)
  }
}
