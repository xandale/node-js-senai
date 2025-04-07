const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js')
//localhost:3000/livros
router.get('/livros', controller.getAll);
//localhost:3000/livros
router.post('/livros', controller.postLivro);
//localhost:3000/livros/id/id coloquei mais um id na url para evitar conflito com /recentes
router.get('/livros/id/:id', controller.getById);
//localhost:3000/livros/filtrar/filtro
router.get('/livros/filtrar/:filtro', controller.getByFilter);
//localhost:3000/livros/recentes
router.get('/livros/recentes', controller.getByRecentes);

module.exports = {router}
//exemplos de livros

//{ "id": "1", "nome": "stephen king", "genero": "terror", "ano": 1977 }
//{ "id": "2", "nome": "J. K. Rowling", "genero": "fantasia", "ano": 1997 }
//{ "id": "3", "nome": "Clive Staples Lewis", "genero": "fantasia", "ano": 1949  }