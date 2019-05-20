const { Router } = require('express')
const TwitterBusiness = require('../business/twitter')

const router = Router()

let tweets = []
TwitterBusiness.getTweetsInterval(callback => {
  tweets = callback
})

/* GET tweets */
router.get('/', (req, res) => {
  res.json(tweets)
})

module.exports = router
