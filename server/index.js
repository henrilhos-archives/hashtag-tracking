const express = require('express')
const consola = require('consola')
const morgan = require('morgan')
const { Nuxt, Builder } = require('nuxt')

const config = require('../nuxt.config.js')
const routes = require('./routes')

const app = express()

// Import and Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  consola.info('Loading models...')
  require('./models')
  consola.success('Models loaded!')

  consola.info('Loading routes...')
  app.use('/api', routes)
  consola.success('Routes loaded!')

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
