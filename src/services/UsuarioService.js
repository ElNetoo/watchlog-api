import bcrypt from 'bcrypt';
import {
  listarUsuarios,
  buscarUsuarioPorEmail,
  inserirUsuario,
} from '../models/UsuarioModel.js';

const SALT = 10;

export function listar() {
  return listarUsuarios().map(({ senha, ...resto }) => resto);
}

export async function cadastrar(dados) {
  if (!dados.nome || !dados.email || !dados.senha)
    throw new Error('Preencha todos os campos.');

  const regexEmail = /^[^\s@]+@[a-zA-Z]+\.com$/;
  if (!regexEmail.test(dados.email))
    throw new Error('E-mail inválido.');

  if (buscarUsuarioPorEmail(dados.email))
    throw new Error('Este e-mail já está cadastrado.');

  const senhaCriptografada = await bcrypt.hash(dados.senha, SALT);
  const usuario = inserirUsuario({ ...dados, senha: senhaCriptografada });
  const { senha, ...semSenha } = usuario;
  return semSenha;
}

export async function login(email, senha) {
  const usuario = listarUsuarios().find((u) => u.email === email);
  if (!usuario) throw new Error('E-mail ou senha inválidos.');

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) throw new Error('E-mail ou senha inválidos.');

  const { senha: _, ...semSenha } = usuario;
  return semSenha;
}