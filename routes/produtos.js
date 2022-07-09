const express = require('express')
const router = express.Router()

// Retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({message: 'Retorna todos os produtos.'})
})

// Insere um produto
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        value: req.body.value
    }
    res.status(201).send({
        message: 'Insere um produto.',
        productCreated: product
    })
})

// Retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if(id === 'especial') {
        res.status(200).send({
            message: 'Você descobriu o ID especial.',
            id
        })
    } else {
        res.status(200).send({
            message: 'Você passou um ID.',
        })  
    }
})

// Altera um produto
router.patch('/', (req, res, next) => {
    res.status(201).send({message: 'Produto alterado.'})
})

// Excluir um produto
router.delete('/', (req, res, next) => {
    res.status(201).send({message: 'Produto excluido.'})
})

module.exports = router