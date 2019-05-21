const mongoose = require('mongoose')
const consola = require('consola')
const config = require('./config')

module.exports.connect = () =>
  new Promise((resolve, reject) => {
    mongoose.connection.on('connected', () => {
      if (process.env.NODE_ENV !== 'test') {
        consola.success('MongoDB connected!')
      }
      resolve()
    })

    try {
      if (process.env.NODE_ENV !== 'test') {
        consola.info(`Connecting on database...`)
      }

      mongoose
        .connect(config.MONGODB_URI, {
          autoReconnect: true,
          reconnectTries: 0,
          reconnectInterval: 100,
          useNewUrlParser: true
        })
        .then(resolve, reject)
    } catch (e) {
      reject(e)
    }
  })
