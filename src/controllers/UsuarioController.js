import * as UsuarioService from '../services/UsuarioService.js';

export function listar(req, res, next) {
  try {
    const usuarios = UsuarioService.listar();
    res.json(usuarios);
  } catch (err) {
    next(err);
  }
}

export async function cadastrar(req, res, next) {
  try {
    const usuario = await UsuarioService.cadastrar(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, senha } = req.body;
    const usuario = await UsuarioService.login(email, senha);
    res.json(usuario);
  } catch (err) {
    next(err);
  }
}