const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const consola = require('consola')
const config = require('./config')

module.exports.connect = () =>
  new Promise(async (resolve, reject) => {
    let MONGODB_URI
    if (process.env.NODE_ENV !== 'test') {
      MONGODB_URI = config.MONGODB_URI
    } else {
      const mongoServer = new MongoMemoryServer()
      MONGODB_URI = await mongoServer.getConnectionString()
    }

    mongoose.connection.on('connected', () => {
      consola.info('MongoDB connected!')
      resolve()
    })

    try {
      mongoose
        .connect(MONGODB_URI, {
          autoReconnect: true,
          reconnectTries: 0,
          reconnectInterval: 100
        })
        .then(resolve, reject)
    } catch (e) {
      reject(e)
    }
  })
