const Twitter = require('twitter')
const consola = require('consola')

const hashtagBusiness = require('./hashtag')
const config = require('./../config')

const client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
})

function formatTweet(tweet) {
  const formatedTweet = {
    createdAt: tweet.created_at,
    text: tweet.full_text,
    user: tweet.user
  }

  if (tweet.entities.media) {
    formatedTweet.media = tweet.entities.media
      .filter(m => m.type === 'photo')
      .map(m => m.media_url_https)
  }

  formatedTweet.user = {
    name: tweet.user.name,
    screenName: tweet.user.screen_name,
    profileImageUrl: tweet.user.profile_image_url_https
  }

  return formatedTweet
}

function getTweets(hashtags) {
  const query = `#${hashtags.join(' OR #')}`
  const searchData = {
    q: query,
    count: 100,
    tweet_mode: 'extended'
    // lang: 'pt',
  }

  return client
    .get('search/tweets', searchData)
    .then(result => {
      const tweets = []
      result.statuses.forEach(tweet => {
        tweets.push(formatTweet(tweet))
      })

      return tweets
    })
    .catch(error => {
      consola.error(error)
      return []
    })
}

function getTweetsInterval(callback) {
  setInterval(() => {
    hashtagBusiness.getHashtags().then(response => {
      const hashtags = response.map(obj => obj.hashtag)

      if (hashtags.length > 0) {
        getTweets(hashtags).then(tweets => {
          callback(tweets)
        })
      }

      return []
    })
  }, 5000)
}

module.exports = {
  getTweetsInterval
}
