const request = require('supertest')

const app = require('./../../../server/app')
describe('create a hashtag', () => {
  // beforeAll(() => {
  // app = require('./../../../server/app')
  // })

  test('should make a new hashtag', done => {
    request(app)
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
