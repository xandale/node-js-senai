// routes/previsao.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/previsao.js');

router.get('/', controller.get);
router.post('/cadastrar', controller.post);
router.get('/:id', controller.getById);

module.exports = router;
