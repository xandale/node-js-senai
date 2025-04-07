import express from 'express'
const router = express.Router()
import { listarHerois, criarHeroi, atualizarHeroi, excluirHeroi } from '../controllers/heroi.js'

router.get('/', listarHerois)
router.post('/', criarHeroi)
router.put('/:id', atualizarHeroi)
router.delete('/:id', excluirHeroi)

export { router }