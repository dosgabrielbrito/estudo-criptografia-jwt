import { generateKeyPairSync, createSign, createVerify } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

let dados = 'Essa string vai ser assinada.';

// ----------------- Assinatura --------------------- //

const assinador = createSign('rsa-sha256');

assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');

console.log(`Assinatura: ${assinatura}`);

// ----------------- Envio do Documento (documento, assinatura, chave pública) --------------------- //

const verificador = createVerify('rsa-sha256');

verificador.update(dados);

const verificado = verificador.verify(publicKey, assinatura, 'hex');

console.log(verificado);

// ----------------- Intermediário --------------------- //

const dadosAlterados = dados + 'Arquivo alterado';

const verificadorAlterado = createVerify('rsa-sha256');

verificadorAlterado.update(dadosAlterados);

const verificadoAlterado = verificadorAlterado.verify(
  publicKey,
  assinatura,
  'hex'
);

console.log(verificadoAlterado);
