const express = require('express')
const consola = require('consola')
const morgan = require('morgan')

const routes = require('./routes')
const mongo = require('./mongo')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongo.connect().then(() => {
  consola.info('Loading routes...')
  app.use('/api', routes)
  consola.success('Routes loaded!')
})

module.exports = app
