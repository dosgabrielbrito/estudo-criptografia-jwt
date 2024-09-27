import { createHash } from 'crypto';

function criaHash(senha) {
  return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash('senhasecreta'));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criaHash(senha)) {
      console.log('Usuário autenticado com sucesso!');
      return true;
    }

    console.log('Usuaŕio ou senha incorretos.');
    return false;
  }
}

const usuarioLogin = 'Gabriel Brito';
const senhaLogin = 'teste123';
const senhaErradaLogin = 'Teste123';

const usuario = new Usuario(usuarioLogin, senhaLogin);

console.log(usuario);

usuario.autentica(usuarioLogin, senhaLogin);
usuario.autentica(usuarioLogin, senhaErradaLogin);
