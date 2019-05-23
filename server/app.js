const express = require('express')
const consola = require('consola')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

consola.info('Loading database...')
require('./mongo')
consola.success('Database loaded!')

consola.info('Loading routes...')
app.use('/api', routes)
consola.success('Routes loaded!')

module.exports = app
