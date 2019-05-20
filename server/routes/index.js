const { Router } = require('express')
const twitter = require('./twitter')
const hashtag = require('./hashtag')

const router = Router()

router.use('/tweets', twitter)
router.use('/hashtag', hashtag)

module.exports = router
