const express = require('express')
const app = express()
const morgan = require('morgan')

const productRouter = require('./routes/produtos')
const orderRouter = require('./routes/pedidos')

app.use(morgan('dev'))

app.use('/produtos', productRouter)
app.use('/pedidos', orderRouter)

// Quando não encontra rota, entra aqui
app.use((req, res, next) => {
    const error = new Error('Não encontrado')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error: {
            message: error.message
        }
    })
})

module.exports = app