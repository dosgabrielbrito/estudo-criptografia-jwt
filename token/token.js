import jwt from 'jsonwebtoken';
import 'dotenv/config';

const chaveSecreta = process.env.CHAVE_JWT;

const token = jwt.sign(
  {
    apelido: 'jm',
    curso: 'Segurança e Node.js',
  },
  chaveSecreta
);

console.log(token);

// ------------- Decofidicando o Token ------------- //

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);
