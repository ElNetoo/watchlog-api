import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CAMINHO = join(__dirname, '../../data/titulos.json');

function ler() {
  return JSON.parse(readFileSync(CAMINHO, 'utf-8'));
}

function salvar(dados) {
  writeFileSync(CAMINHO, JSON.stringify(dados, null, 2));
}

export function listarTitulos() {
  return ler();
}

export function buscarTituloPorId(id) {
  return ler().find((t) => t.id === id);
}

export function listarTitulosPorUsuario(usuarioId) {
  return ler().filter((t) => t.usuarioId === usuarioId);
}

export function inserirTitulo(dados) {
  const titulos = ler();
  const proximoId = titulos.length > 0 ? Math.max(...titulos.map((t) => t.id)) + 1 : 1;
  const titulo = { id: proximoId, ...dados };
  titulos.push(titulo);
  salvar(titulos);
  return titulo;
}

export function atualizarTitulo(id, dados) {
  const titulos = ler();
  const index = titulos.findIndex((t) => t.id === id);
  if (index === -1) return null;
  titulos[index] = { ...titulos[index], ...dados };
  salvar(titulos);
  return titulos[index];
}

export function removerTitulo(id) {
  const titulos = ler();
  const index = titulos.findIndex((t) => t.id === id);
  if (index === -1) return null;
  const removido = titulos.splice(index, 1)[0];
  salvar(titulos);
  return removido;
}