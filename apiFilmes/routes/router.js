const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/filmes', controller.getAll);
router.get('/filmes/:categoria', controller.getFilmeCategoria);
router.post('/filmes', controller.postFilmes);
router.put('/filmes/:idFilme', controller.putFilmes);
router.delete('/filmes/:idFilme', controller.deleteFilme);

module.exports = {router}