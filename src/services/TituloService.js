import {
  listarTitulos,
  buscarTituloPorId,
  listarTitulosPorUsuario,
  inserirTitulo,
  atualizarTitulo,
  removerTitulo,
} from '../models/TituloModel.js';

export function listar() {
  return listarTitulos();
}

export function listarPorUsuario(usuarioId) {
  return listarTitulosPorUsuario(usuarioId);
}

export function buscarPorId(id) {
  const titulo = buscarTituloPorId(id);
  if (!titulo) throw new Error('Título não encontrado.');
  return titulo;
}

export function criar(dados) {
  if (!dados.nome) throw new Error('O nome do título é obrigatório.');
  if (!dados.tipo) throw new Error('O tipo é obrigatório (filme ou série).');
  if (!dados.usuarioId) throw new Error('O usuarioId é obrigatório.');
  return inserirTitulo(dados);
}

export function atualizar(id, dados) {
  buscarPorId(id);
  return atualizarTitulo(id, dados);
}

export function remover(id) {
  buscarPorId(id);
  return removerTitulo(id);
}