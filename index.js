const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotasProdutos = require('./rotasProdutos')
const rotasClientes = require('./rotasClientes')


app.use(bodyParser.json())

app.use('/produtos', rotasProdutos)
app.use('/clientes', rotasClientes)

// app.listen(8000)

module.exports = app

