const db = require ('./db.json')
const {v4: uuidv4} = require('uuid')
const fs = require ('fs')
const router = require('./rotasClientes')


const listClientes = async (req,res) => {
    var clientes = db.clientes
    res.json(clientes)
}

const creatCliente = async (req, res) => {
    const _id = parseInt(req.params.id);
    const lista_clientes = db.clientes;
    const cliente = lista_clientes.find(cliente => cliente.id === _id);
    cliente ? res.json(cliente) : res.status(404).send({error:"not found"})
}
const getCliente = async(req, res) => {
    const data = req.body;

    if(!data.nome || !data.email){
        return res.status(406).send({error:"Nome e email devem ser informados"})
    }
    const _id = uuidv4()
    data.id = _id

    lista_clientes = db.clientes
    lista_clientes.push(data)

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err){
            res.status(500).send({error:"Houve um erro"})
        }
    })
    res.status(204).send()
}

const updateCliente = async(req, res) => {
    const _id = req.params.id
    const dados = req.body
    const lista_clientes = db.clientes
    const cliente = lista_clientes.find((cliente) => cliente.id == _id)

    if(!cliente || dados){
        res.status(404).send({error:"not found"})
    }
    console.log(dados)
    for(const dado in dados){
        if(!(dado in cliente)){
            console.log("erro: este dado não existe")
            continue
        }
        cliente[dado] = dados[dado]
    }
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err){
            res.status(404).send({error:"not found"})
        }
    })
}

const deleteCliente = async(req, res) => {
    const _id = req.params.id
    const lista_clientes = db.clientes
    console.log(lista_clientes)
    const cliente = lista_clientes.find((cliente) => cliente?.id == _id)

    var idx = lista_clientes.indexOf(cliente)
    lista_clientes.splice(idx, 1)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err){
            res.status(404).send({error:"erro no servidor"})
        }
    })
    res.status(204).send()
}

module.exports = {listClientes, creatCliente, getCliente, updateCliente, deleteCliente}