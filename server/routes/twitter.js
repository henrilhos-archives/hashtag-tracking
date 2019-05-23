const { Router } = require('express')
const TwitterManagement = require('../management/twitter')

const router = Router()

let tweets = []
TwitterManagement.getTweetsInterval(callback => {
  tweets = callback
})

/* GET tweets */
router.get('/', (req, res) => {
  res.json(tweets)
})

module.exports = router
