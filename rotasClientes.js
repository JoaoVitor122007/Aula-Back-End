const express = require('express')
const router = express.Router()
const controlador = require('./controladorClientes')


router.get('', controlador.listClientes)
router.get(':id', controlador.creatCliente)
router.post('', controlador.getCliente)
router.post(':id', controlador.updateCliente)
router.delete(':id', controlador.deleteCliente)

module.exports = router
