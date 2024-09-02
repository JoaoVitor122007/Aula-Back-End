const express = require('express')
const router = express.Router()
const controlador = require('./controladorProdutos')


router.get('', controlador.listProdutos)
router.get(':id', controlador.creatProduto)
router.post('', controlador.getProduto)
router.post(':id', controlador.updateProduto)
router.delete(':id', controlador.deleteProduto)

module.exports = router
