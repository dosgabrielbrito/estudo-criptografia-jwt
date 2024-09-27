import 'dotenv/config';
import { createHash } from 'crypto';

function criaHash(dado, estrategia) {
  return createHash(estrategia).update(dado).digest('hex');
}

function ataqueRainbowTable() {
  console.log('Teste de Rainbow Table:');

  const senhasComuns = [
    'senha',
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

  const rainbowTable = senhasComuns.map((senha) => {
    return [senha, criaHash(senha, 'MD5')];
  });

  const hashesVazadas = [
    '21232f297a57a5a743894a0e4a801fc3',
    'cedf5ab7b5c5852b3ed35d7dbe3c3835',
    '81dc9bdb52d04dc20036dbd8313ed055',
  ];

  hashesVazadas.map((hashVazada) => {
    rainbowTable.map((parGerado) => {
      if (hashVazada === parGerado[1]) {
        console.log(`Hash vazada: ${parGerado[1]} Senha: ${parGerado[0]}`);
      }
    });
  });
}

export default ataqueRainbowTable;
