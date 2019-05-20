const mongoose = require('mongoose')
const consola = require('consola')

const config = require('../config')
const hashtagModel = require('./hashtag.js')

const modelSources = [hashtagModel]

const database = mongoose.createConnection(config.MONGODB_URI, {
  useNewUrlParser: true
})

consola.info('** Models initialization...')

const models = {}
modelSources.forEach(m => {
  const modelSource = m

  modelSource.options.timestamps = true
  const schema = new mongoose.Schema(
    modelSource.definition,
    modelSource.options
  )

  if (modelSource.indexes != null) {
    modelSource.indexes.forEach(idx => {
      schema.index(idx.fields, idx.options)
    })
  }

  const model = database.model(modelSource.name, schema)

  consola.info(`Mapping entity ${modelSource.name}...`)
  models[modelSource.name] = model
})

function getModel(modelName) {
  return models[modelName]
}

function getConnection() {
  return database
}

module.exports = { getModel, getConnection }
