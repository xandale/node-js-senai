const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/nome/:nome', controller.getByName);
router.get('/nacionalidade/:nacionalidade', controller.getByNacionalidade);
router.get('/nacionalidade/:nacionalidade', controller.getByNacionalidade);
router.get('/', controller.getByABV);
router.get('/tipo/:tipo', controller.getByTipo);

// Exportando as rotas
module.exports = router;    