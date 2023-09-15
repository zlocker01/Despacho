import express from 'express';
const router = express.Router();
import { ingresar, perfil } from '../controllers/AbogadoController.js';

router.post('/', ingresar );

router.get('/perfil', perfil);

export default router;