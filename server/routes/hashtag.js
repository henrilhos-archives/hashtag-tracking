/* eslint-disable no-underscore-dangle */
const { Router } = require('express')

const {
  createHashtag,
  deleteHashtag,
  getHashtag,
  getHashtags,
  updateHashtag
} = require('../management/hashtag')

const router = Router()

/* GET hashtags */
router.get('/', async (req, res) => {
  const result = await getHashtags()
  res.json(result)
})

/* GET :hashtag */
router.get('/:hashtag', async (req, res) => {
  const reqHashtag = req.params.hashtag.toLowerCase()
  const hashtags = await getHashtag({ hashtag: reqHashtag })
  const hashtag = hashtags.filter(h => h.hashtag === reqHashtag)[0]

  if (hashtag) {
    res.json(hashtag)
  } else {
    res.status(404)
    res.send("Hashtag doesn't exists")
  }
})

/* POST :hashtag */
router.post('/', async (req, res) => {
  const reqHashtag = req.body.hashtag.toLowerCase()

  const hashtags = await getHashtag({ hashtag: reqHashtag })
  if (hashtags.length === 0) {
    const result = await createHashtag({ hashtag: reqHashtag })
    res.json(result)
  } else {
    const id = hashtags[0]._id
    const count = hashtags[0].count + 1

    const result = await updateHashtag({ id: id, count: count })
    res.json(result)
  }
})

/* DELETE :hashtag */
router.delete('/:hashtag', async (req, res) => {
  const reqHashtag = req.params.hashtag.toLowerCase()
  const hashtags = await getHashtag({ hashtag: reqHashtag })
  const hashtag = hashtags.filter(h => h.hashtag === reqHashtag)[0]

  if (hashtag) {
    const id = hashtag._id
    const result = await deleteHashtag({ id: id })

    res.json(result)
  } else {
    res.status(404)
    res.send("Hashtag doesn't exists")
  }
})

module.exports = router
