const mongoose = require('mongoose')
const { Schema } = mongoose

const HashtagSchema = new Schema({
  hashtag: String,
  active: Boolean,
  count: Number
})

module.exports = mongoose.model('hashtag', HashtagSchema)
