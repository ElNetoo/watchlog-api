import db from '../../database/db.js';

export function listarTitulos() {
  return db.prepare('SELECT * FROM titulos').all();
}

export function buscarTituloPorId(id) {
  return db.prepare('SELECT * FROM titulos WHERE id = ?').get(id);
}

export function listarTitulosPorUsuario(usuarioId) {
  return db.prepare('SELECT * FROM titulos WHERE usuarioId = ?').all(usuarioId);
}

export function inserirTitulo(dados) {
  const stmt = db.prepare(
    'INSERT INTO titulos (nome, tipo, genero, plataforma, status, nota, usuarioId) VALUES (?, ?, ?, ?, ?, ?, ?)'
  );
  const result = stmt.run(dados.nome, dados.tipo, dados.genero, dados.plataforma, dados.status, dados.nota, dados.usuarioId);
  return { id: result.lastInsertRowid, ...dados };
}

export function atualizarTitulo(id, dados) {
  const stmt = db.prepare(
    'UPDATE titulos SET nome = ?, tipo = ?, genero = ?, plataforma = ?, status = ?, nota = ? WHERE id = ?'
  );
  stmt.run(dados.nome, dados.tipo, dados.genero, dados.plataforma, dados.status, dados.nota, id);
  return buscarTituloPorId(id);
}

export function removerTitulo(id) {
  const titulo = buscarTituloPorId(id);
  db.prepare('DELETE FROM titulos WHERE id = ?').run(id);
  return titulo;
}