const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');
// Exportando as rotas
//  http://localhost:3000/tasks
// Rota para listar todas as tarefas
router.get('/', controller.getAllTasks );
// Rota para criar tarefas
router.post('/', controller.postTask);
// Rota para buscar task pelo  id
router.get('/:id', controller.getTaskById);
module.exports = router; 