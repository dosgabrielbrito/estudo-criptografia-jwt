import { createHash } from 'crypto';

class Usuario {
  constructor(nome, senha, textoLog = false) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
    this.textoLog = textoLog;
  }

  criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === this.criaHash(senha)) {
      console.log('Usuário autenticado com sucesso!');
      return true;
    }

    if (this.textoLog) {
      console.log('Usuário ou senha incorretos.');
    }

    return false;
  }
}

export default Usuario;
