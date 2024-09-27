import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashSal(senha) {
  const sal = randomBytes(16).toString('hex');

  const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

  return `${sal}:${senhaHasheada}`;
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    [this.sal, this.hash] = criaHashSal(senha).split(':');
  }

  autentica(nome, senha) {
    if (nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);
      const hashReal = Buffer.from(this.hash, 'hex');

      const hashesOk = timingSafeEqual(testeHash, hashReal);

      if (hashesOk) {
        console.log('Usuário autenticado com sucesso!');
        return true;
      }

      console.log('Usuário ou senha incorretos.');
    }
  }
}

const usuarioLogin = 'Gabriel Brito';
const senhaLogin = 'teste123';
const senhaErradaLogin = 'Teste123';

const usuario = new Usuario(usuarioLogin, senhaLogin);

console.log(usuario);

usuario.autentica(usuarioLogin, senhaLogin);
usuario.autentica(usuarioLogin, senhaErradaLogin);
