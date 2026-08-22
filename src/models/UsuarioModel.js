import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CAMINHO = join(__dirname, '../../data/usuarios.json');

function ler() {
  return JSON.parse(readFileSync(CAMINHO, 'utf-8'));
}

function salvar(dados) {
  writeFileSync(CAMINHO, JSON.stringify(dados, null, 2));
}

export function listarUsuarios() {
  return ler();
}

export function buscarUsuarioPorEmail(email) {
  return ler().find((u) => u.email === email);
}

export function inserirUsuario(dados) {
  const usuarios = ler();
  const proximoId = usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
  const usuario = { id: proximoId, ...dados };
  usuarios.push(usuario);
  salvar(usuarios);
  return usuario;
}