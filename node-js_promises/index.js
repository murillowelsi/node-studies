/* 
  0 - obter usuario
  1 - obter telefone do usuario a partir do seu ID
  2 - obter endereco do usuario a partir do seu ID
*/

//importamos o modulo util do nodejs
const util = require('util');

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

const usuarioPromisse = obterUsuario()
// para manipular o sucesso usamos a funcao .then
// para manipular o erro usamos a funcao .catch
// usuario > telefone > telefone
usuarioPromisse
  .then(function (usuario) {
    return obterTelefone(usuario.id)
    .then(function resolverTelefone(telefone) {
      return {
        usuario: {
          id: usuario.id,
          nome: usuario.nome
        },
        telefone: {
          codigo: telefone.ddi,
          numero: telefone.telefone
        }
      }
    })
  })
  .then(function (resultado) {
    const endereco = obterEndereco(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    });
  })
  .then(function (resultado) {
    console.log(`
        Nome: ${resultado.usuario.nome} - Telefone: ${resultado.telefone.ddi} ${resultado.telefone.telefone} 
        Data de nascimento: ${resultado.usuario.dataNascimento}
        Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero} - ${resultado.endereco.freguesia}, ${resultado.endereco.pais}
      `)
  })
  .catch(function (error) {
    console.error('DEU RUIM', error)
  })
