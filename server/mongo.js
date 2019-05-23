const mongoose = require('mongoose')
const consola = require('consola')
const { Schema } = mongoose

const config = require('./config')
const hashtag = require('./models/hashtag')

const srcModels = [hashtag]

const database = mongoose.createConnection(config.MONGODB_URI, {
  autoReconnect: true,
  reconnectTries: 0,
  reconnectInterval: 100,
  useNewUrlParser: true
})

const models = {}
srcModels.forEach(srcModel => {
  // const srcModel = m
  srcModel.options.timestamps = true
  const schema = new Schema(srcModel.definition, srcModel.options)

  if (srcModel.indexes != null) {
    srcModel.indexes.forEach(idx => {
      schema.index(idx.fields, idx.options)
    })
  }

  const model = database.model(srcModel.name, schema)

  consola.info(`Mapping entitiy ${srcModel.name}...`)
  models[srcModel.name] = model
})

const getConnection = () => {
  return database
}

const getModel = ({ modelName }) => {
  return models[modelName]
}

module.exports = {
  getConnection,
  getModel
}
