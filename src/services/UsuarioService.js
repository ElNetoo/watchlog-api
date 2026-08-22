import {
  listarUsuarios,
  buscarUsuarioPorEmail,
  inserirUsuario,
} from '../models/UsuarioModel.js';

export function listar() {
  return listarUsuarios().map(({ senha, ...resto }) => resto);
}

export function cadastrar(dados) {
  if (!dados.nome || !dados.email || !dados.senha)
    throw new Error('Preencha todos os campos.');

  if (buscarUsuarioPorEmail(dados.email))
    throw new Error('Este e-mail já está cadastrado.');

  const usuario = inserirUsuario(dados);
  const { senha, ...semSenha } = usuario;
  return semSenha;
}

export function login(email, senha) {
  const usuario = listarUsuarios().find(
    (u) => u.email === email && u.senha === senha
  );
  if (!usuario) throw new Error('E-mail ou senha inválidos.');
  const { senha: _, ...semSenha } = usuario;
  return semSenha;
}