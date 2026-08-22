const titulos = [];
let proximoId = 1;

export function listarTitulos() {
  return titulos;
}

export function buscarTituloPorId(id) {
  return titulos.find((t) => t.id === id);
}

export function listarTitulosPorUsuario(usuarioId) {
  return titulos.filter((t) => t.usuarioId === usuarioId);
}

export function inserirTitulo(dados) {
  const titulo = { id: proximoId++, ...dados };
  titulos.push(titulo);
  return titulo;
}

export function atualizarTitulo(id, dados) {
  const index = titulos.findIndex((t) => t.id === id);
  if (index === -1) return null;
  titulos[index] = { ...titulos[index], ...dados };
  return titulos[index];
}

export function removerTitulo(id) {
  const index = titulos.findIndex((t) => t.id === id);
  if (index === -1) return null;
  return titulos.splice(index, 1)[0];
}