import 'dotenv/config';
import Usuario from './Usuario.js';

function ataqueForcaBruta() {
  console.log('Teste de força bruta:');

  const usuarioLogin = 'Gabriel Brito';
  const senhaLogin = process.env.SENHA_FRACA;

  const usuario = new Usuario(usuarioLogin, senhaLogin);

  for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
    if (usuario.autentica('Gabriel Brito', senhaTeste.toString())) {
      console.log(`QU3BR31! Senha: ${senhaTeste}`);
    }
  }
}

export default ataqueForcaBruta;
