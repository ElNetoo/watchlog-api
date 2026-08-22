import * as TituloService from '../services/TituloService.js';

export function listar(req, res) {
  const titulos = TituloService.listar();
  res.json(titulos);
}

export function listarPorUsuario(req, res) {
  const usuarioId = Number(req.params.usuarioId);
  const titulos = TituloService.listarPorUsuario(usuarioId);
  res.json(titulos);
}

export function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const titulo = TituloService.buscarPorId(id);
  res.json(titulo);
}

export function criar(req, res) {
  const titulo = TituloService.criar(req.body);
  res.status(201).json(titulo);
}

export function atualizar(req, res) {
  const id = Number(req.params.id);
  const titulo = TituloService.atualizar(id, req.body);
  res.json(titulo);
}

export function remover(req, res) {
  const id = Number(req.params.id);
  TituloService.remover(id);
  res.status(204).send();
}