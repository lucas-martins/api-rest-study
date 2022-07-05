const express = require('express')
const app = express()

const productRouter = require('./routes/produtos')
const orderRouter = require('./routes/pedidos')

app.use('/produtos', productRouter)
app.use('/pedidos', orderRouter)

module.exports = app