const express = require('express')
const consola = require('consola')
const morgan = require('morgan')
const routes = require('./routes')
const mongo = require('./mongo')

async function initialize() {
  const app = express()

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  await mongo
    .connect()
    .then(() => {
      consola.info('Loading routes...')
      app.use('/api', routes)
      consola.success('Routes loaded!')
    })
    .catch(error => {
      throw new Error({ error: error })
    })

  return app
}

module.exports = {
  initialize
}
