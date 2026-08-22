import * as UsuarioService from '../services/UsuarioService.js';

export function listar(req, res) {
  const usuarios = UsuarioService.listar();
  res.json(usuarios);
}

export function cadastrar(req, res) {
  const usuario = UsuarioService.cadastrar(req.body);
  res.status(201).json(usuario);
}

export function login(req, res) {
  const { email, senha } = req.body;
  const usuario = UsuarioService.login(email, senha);
  res.json(usuario);
}