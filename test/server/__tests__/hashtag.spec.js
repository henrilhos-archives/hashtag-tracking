const request = require('supertest')
const app = require('./../../../server/app')

let server
beforeAll(async () => {
  server = await app.initialize()
})

describe('create a hashtag', () => {
  test('should make a new hashtag', done => {
    request(server)
      .get('/api/hashtag')
      .then(response => {
        // eslint-disable-next-line no-console
        console.log('*******', response.body)
        expect(response.statusCode).toBe(200)
        done()
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log('ERROR:', err)
      })
  })
})
