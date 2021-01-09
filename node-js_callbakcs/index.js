/* 
  0 - obter usuario
  1 - obter telefone do usuario a partir do seu ID
  2 - obter endereco do usuario a partir do seu ID
*/

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: "Murillo Welsi",
      dataNascimento: "1989-07-24"
    })
  }, 1000)

}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      ddi: '+351',
      telefone: '910783561'
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Rua do Sobreiro',
      numero: 122,
      complemento: '4 andar -  CTR TRS',
      pais: 'Portugal - Porto',
      freguesia: 'Sra da Hora'
    }, 2000)
  })
}

function resolverUsuario(erro, usuario) {
  console.log('user', usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
  if(error) {
    console.error('DEU RUIM em USUARIO', error);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if(error1) {
      console.error('DEU RUIM em TELEFONE', error);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if(error2) {
        console.error('DEU RUIM em ENDERECO', error);
        return;
      }

      console.log(`
        Nome: ${usuario.nome} - Telefone: ${telefone.ddi} ${telefone.telefone} 
        Data de nascimento: ${usuario.dataNascimento}
        Endereco: ${endereco.rua}, ${endereco.numero} - ${endereco.freguesia}, ${endereco.pais}
      `)
    })
  })
});

