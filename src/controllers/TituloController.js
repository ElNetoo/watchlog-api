import * as TituloService from '../services/TituloService.js';

export function listar(req, res, next) {
  try {
    const titulos = TituloService.listar();
    res.json(titulos);
  } catch (err) {
    next(err);
  }
}

export function listarPorUsuario(req, res, next) {
  try {
    const usuarioId = Number(req.params.usuarioId);
    const titulos = TituloService.listarPorUsuario(usuarioId);
    res.json(titulos);
  } catch (err) {
    next(err);
  }
}

export function buscarPorId(req, res, next) {
  try {
    const id = Number(req.params.id);
    const titulo = TituloService.buscarPorId(id);
    res.json(titulo);
  } catch (err) {
    next(err);
  }
}

export function criar(req, res, next) {
  try {
    const titulo = TituloService.criar(req.body);
    res.status(201).json(titulo);
  } catch (err) {
    next(err);
  }
}

export function atualizar(req, res, next) {
  try {
    const id = Number(req.params.id);
    const titulo = TituloService.atualizar(id, req.body);
    res.json(titulo);
  } catch (err) {
    next(err);
  }
}

export function remover(req, res, next) {
  try {
    const id = Number(req.params.id);
    TituloService.remover(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}