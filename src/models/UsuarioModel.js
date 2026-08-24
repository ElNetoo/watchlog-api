import db from '../../database/db.js';

export function listarUsuarios() {
  return db.prepare('SELECT * FROM usuarios').all();
}

export function buscarUsuarioPorEmail(email) {
  return db.prepare('SELECT * FROM usuarios WHERE email = ?').get(email);
}

export function inserirUsuario(dados) {
  const stmt = db.prepare('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)');
  const result = stmt.run(dados.nome, dados.email, dados.senha);
  return { id: result.lastInsertRowid, ...dados };
}