const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const consola = require('consola')
const config = require('./config')

let mongoServer

module.exports.connect = () =>
  new Promise(async (resolve, reject) => {
    let MONGODB_URI
    if (process.env.NODE_ENV !== 'test') {
      MONGODB_URI = config.MONGODB_URI
    } else {
      mongoServer = new MongoMemoryServer()
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
          reconnectInterval: 100,
          useNewUrlParser: true
        })
        .then(resolve, reject)
    } catch (e) {
      reject(e)
    }
  })

module.exports.disconnect = () => {
  if (process.env.NODE_ENV === 'test') {
    mongoServer.stop()
  }

  mongoose.disconnect()
}
