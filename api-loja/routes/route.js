const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

// Rotas para os itens
router.post('/items', controller.cadastrasItem); // Cria um novo item
router.get('/items', controller.listarItems); // Busca todos os itens
router.get('/items/nome/:nome', controller.listarItemPeloNome); // Busca itens pelo nome não funciona
router.get('/items/:id', controller.listarItemPeloId); // Busca um item por ID
router.put('/items/:id', controller.AtualizaItem); // Atualiza um item existente
router.delete('/items/:id', controller.deletarItem); // Deleta um item

module.exports = router; // Exporta diretamente o 'router'



// GET /items → Retorna todos os itens
// GET /items/:id → Retorna um item pelo ID
// POST /items → Adiciona um novo item
// PUT /items/:id → Atualiza um item pelo ID
// DELETE /items/:id → Remove um item pelo ID
// GET /items/search?q=nome → Busca itens pelo nome