const mongoose = require('mongoose')
const { Schema } = mongoose

const HashtagSchema = new Schema(
  {
    hashtag: String,
    active: Boolean,
    count: Number
  },
  {
    strict: false,
    collection: 'hashtag',
    timestamps: true
  }
)

module.exports = mongoose.model('Hashtag', HashtagSchema)
