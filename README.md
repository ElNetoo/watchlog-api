# WatchLog API

API REST desenvolvida para o projeto "WatchLog" da disciplina de Programação Web.

## Sobre

Backend do projeto WatchLog, um sistema para registrar e organizar filmes e séries assistidos. Desenvolvido com Node.js puro e Express.

## Tecnologias

- Node.js
- Express
- CORS

## Endpoints

### Usuários

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /usuarios | Lista todos os usuários |
| POST | /usuarios | Cadastra um novo usuário |
| POST | /login | Autentica um usuário |

### Títulos

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /titulos | Lista todos os títulos |
| GET | /titulos/:id | Busca um título por ID |
| GET | /titulos/usuario/:usuarioId | Lista títulos de um usuário |
| POST | /titulos | Cria um novo título |
| PUT | /titulos/:id | Atualiza um título |
| DELETE | /titulos/:id | Remove um título |

## Como rodar

```bash
npm install
npm run dev
```
## Autor

Francisco
