import express from 'express';
const router = express.Router();
import { ingresar, perfil } from '../controllers/AbogadoController.js';

router.get('/', ingresar );

router.get('/perfil', perfil);

export default router;