import { Router } from 'express';
import * as UsuarioController from '../controllers/UsuarioController.js';

const router = Router();

router.get('/', UsuarioController.listar);
router.post('/', UsuarioController.cadastrar);

export default router;