import express from 'express';
import cors from 'cors';
import { logger } from './src/middleware/logger.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import usuarioRoutes from './src/routes/usuarioRoutes.js';
import tituloRoutes from './src/routes/tituloRoutes.js';
import * as UsuarioService from './src/services/UsuarioService.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.post('/login', async (req, res, next) => {
  try {
    const { email, senha } = req.body;
    const usuario = await UsuarioService.login(email, senha);
    res.json(usuario);
  } catch (err) {
    next(err);
  }
});

app.use('/usuarios', usuarioRoutes);
app.use('/titulos', tituloRoutes);

app.use(errorHandler);

export default app;