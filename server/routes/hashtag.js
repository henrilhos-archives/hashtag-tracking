/* eslint-disable no-underscore-dangle */
const { Router } = require('express')
const consola = require('consola')

const hashtagBusiness = require('../business/hashtag')

const router = Router()

/* GET hashtags */
router.get('/', (req, res) => {
  hashtagBusiness
    .getHashtags()
    .then(r => {
      res.json(r)
    })
    .catch(e => {
      consola.error('** Error getting hashtags:', e)
      res.json(null)
    })
})

/* POST hashtag */
router.post('/', (req, res) => {
  const hashtag = req.body.hashtag.toLowerCase()

  hashtagBusiness
    .getHashtag(hashtag)
    .then(r => {
      if (r.length === 0) {
        hashtagBusiness
          .createHashtag(hashtag)
          .then(response => {
            res.json(response)
          })
          .catch(e => {
            consola.error('** Error creating hashtag:', e)
            res.json(null)
          })
      } else {
        hashtagBusiness
          .updateHashtag(r[0])
          .then(response => {
            res.json(response)
          })
          .catch(e => {
            consola.error('** Error creating hashtag:', e)
            res.json(null)
          })
      }
    })
    .catch(e => {
      consola.error('** Error getting hashtag:', e)
      res.json(null)
    })
})

/* DELETE hashtag */
router.delete('/:hashtag', (req, res) => {
  const hashtag = req.params.hashtag.toLowerCase()

  hashtagBusiness
    .getHashtag(hashtag)
    .then(r => {
      if (r.length !== 0) {
        hashtagBusiness
          .deleteHashtag(r[0])
          .then(response => {
            res.json(response)
          })
          .catch(e => {
            consola.error('** Error deleting hashtag:', e)
            res.json(null)
          })
      } else {
        res.json({ message: "Hashtag doesn't exists" })
      }
    })
    .catch(e => {
      consola.error('** Error getting hashtag:', e)
      res.json(null)
    })
})

module.exports = router
