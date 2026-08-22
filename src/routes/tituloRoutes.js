import { Router } from 'express';
import * as TituloController from '../controllers/TituloController.js';

const router = Router();

router.get('/', TituloController.listar);
router.get('/usuario/:usuarioId', TituloController.listarPorUsuario);
router.get('/:id', TituloController.buscarPorId);
router.post('/', TituloController.criar);
router.put('/:id', TituloController.atualizar);
router.delete('/:id', TituloController.remover);

export default router;