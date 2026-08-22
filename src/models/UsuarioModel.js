const usuarios = [
  { id: 1, nome: 'Francisco', email: 'francisco@gmail.com', senha: '123456' },
];
let proximoId = 2;

export function listarUsuarios() {
  return usuarios;
}

export function buscarUsuarioPorId(id) {
  return usuarios.find((u) => u.id === id);
}

export function buscarUsuarioPorEmail(email) {
  return usuarios.find((u) => u.email === email);
}

export function inserirUsuario(dados) {
  const usuario = { id: proximoId++, ...dados };
  usuarios.push(usuario);
  return usuario;
}