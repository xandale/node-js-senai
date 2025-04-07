import express from 'express'
const router = express.Router();
import controller from '../controllers/controler.js';

router.post('/cadastrar', controller.post);
router.get('/listar', controller.get);
router.get('/detalhes/:id', controller.getById);
export default router;
