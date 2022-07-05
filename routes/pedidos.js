const express = require('express')
const router = express.Router()

// Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({message: 'Retorna os pedidos.'})
})

// Insere um pedido
router.post('/', (req, res, next) => {
    res.status(201).send({message: 'O pedido foi criado.'})
})

// Retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        message: 'Detalhes do pedido.',
        id_pedido: id
    })
})

// Excluir um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({message: 'Pedido excluido.'})
})

module.exports = router