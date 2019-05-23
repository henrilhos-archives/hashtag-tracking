const { getModel } = require('../mongo')
const Hashtag = getModel({ modelName: 'Hashtag' })

const createHashtag = async ({ hashtag }) => {
  try {
    const hashtagModel = new Hashtag()
    hashtagModel.hashtag = hashtag
    hashtagModel.active = true
    hashtagModel.count = 1

    const response = await hashtagModel.save()
    return response
  } catch (err) {
    return err
  }
}

const deleteHashtag = async ({ id }) => {
  try {
    const query = { $set: { active: false } }

    const response = await Hashtag.findByIdAndUpdate(id, query)
    return response
  } catch (err) {
    return err
  }
}

const getHashtag = async ({ hashtag }) => {
  try {
    const query = [{ $match: { hashtag: hashtag } }]

    const response = await Hashtag.aggregate(query)
    return response
  } catch (err) {
    return err
  }
}

const getHashtags = async () => {
  try {
    const query = [{ $match: { active: true } }]

    const response = await Hashtag.aggregate(query)
    return response
  } catch (err) {
    return err
  }
}

const updateHashtag = async ({ id, count }) => {
  try {
    const query = { $set: { active: true, count: count } }

    const response = await Hashtag.findByIdAndUpdate(id, query)
    return response
  } catch (err) {
    return err
  }
}

module.exports = {
  createHashtag,
  deleteHashtag,
  getHashtag,
  getHashtags,
  updateHashtag
}
