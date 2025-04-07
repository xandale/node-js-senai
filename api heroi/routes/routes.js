const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
const authenticateToken = require('../middlewares/auth');  // Importando o middleware de autenticação

// Mostrar todas as batalhas (pública)
router.get('/batalha', controller.todasBatalhas);

// Cadastro de herói e vilão (precisa de autenticação)
router.post('/heroi', authenticateToken, controller.cadastrarHeroi);
router.post('/vilao', authenticateToken, controller.cadastrarVilao);

// Rota para mostrar detalhes de batalha e listar com parâmetros (públicas)
router.get('/:parametro', controller.listar);

// Deletar herói e vilão (precisa de autenticação)
router.delete('/heroi/:id', authenticateToken, controller.deletarHeroi);
router.delete('/vilao/:id', authenticateToken, controller.deletarVilao);

// Rota para resetar as tabelas de heróis e vilões (precisa de autenticação)
router.post('/resetar-tabelas', authenticateToken, controller.resetarTabelas);

// Rota da batalha (precisa de autenticação)
router.post('/batalha', authenticateToken, controller.batalhar);

// Adicionando a rota de login
router.post('/login', controller.login);

module.exports = router;
