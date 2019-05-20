/* eslint-disable no-underscore-dangle */
const models = require('../models')

const Hashtag = models.getModel('Hashtag')

function getHashtags() {
  return Hashtag.aggregate([{ $match: { active: true } }])
}

function getHashtag(hashtag) {
  return Hashtag.aggregate([{ $match: { hashtag: hashtag } }])
}

function createHashtag(hashtag) {
  const hashtagDb = new Hashtag()
  hashtagDb.hashtag = hashtag
  hashtagDb.active = true
  hashtagDb.count = 1

  return hashtagDb.save()
}

function updateHashtag(hashtagObject) {
  return Hashtag.findByIdAndUpdate(hashtagObject._id, {
    $set: { active: true, count: hashtagObject.count + 1 }
  })
}

function deleteHashtag(hashtagObject) {
  return Hashtag.findByIdAndUpdate(hashtagObject._id, {
    $set: { active: false }
  })
}

module.exports = {
  getHashtags,
  getHashtag,
  createHashtag,
  updateHashtag,
  deleteHashtag
}
