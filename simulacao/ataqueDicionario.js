import 'dotenv/config';
import Usuario from './Usuario.js';

function ataqueDicionario() {
  console.log('Teste de dicionário:');

  const usuarioLogin = 'Gabriel Brito';
  const senhaLogin = process.env.SENHA_FRACA;

  const usuario = new Usuario(usuarioLogin, senhaLogin);

  const senhasComuns = [
    'senha',
    '123',
    '1234',
    '123456',
    'senha123',
    'admin',
    'blink182',
    'meuAniversario',
    'senha123456',
    'brasil',
    '102030',
  ];

  senhasComuns.map((senha) => {
    if (usuario.autentica('Gabriel Brito', senha)) {
      console.log(`QU3BR31! Senha: ${senha}`);
    }
  });
}

export default ataqueDicionario;
