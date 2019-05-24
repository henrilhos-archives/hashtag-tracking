/* eslint-disable no-console */
const request = require('supertest')
const app = require('./../../../server/app')

let server
beforeAll(async () => {
  server = await app.initialize()
})

afterAll(async () => {
  await app.close()
})

describe('testing the hashtag service', () => {
  test('should be empty', async () => {
    const getHashtags = await request(server).get('/api/hashtag')

    expect(getHashtags.statusCode).toBe(200)
    expect(getHashtags.body.length).toBe(0)
  })

  test('should create the #foobar hashtag', async () => {
    const createHashtag = await request(server)
      .post('/api/hashtag')
      .send({ hashtag: 'foobar' })

    expect(createHashtag.statusCode).toBe(200)
    expect(createHashtag.body.hashtag).toBe('foobar')
    expect(createHashtag.body.active).toBe(true)
    expect(createHashtag.body.count).toBe(1)
  })

  test('should exists just one hashtag (#foobar)', async () => {
    const getHashtags = await request(server).get('/api/hashtag')

    expect(getHashtags.statusCode).toBe(200)
    expect(getHashtags.body.length).toBe(1)
    expect(getHashtags.body[0].hashtag).toBe('foobar')
    expect(getHashtags.body[0].active).toBe(true)
    expect(getHashtags.body[0].count).toBe(1)
  })

  test('should delete the #foobar hashtag', async () => {
    const deleteHashtag = await request(server).delete('/api/hashtag/foobar')
    const getHashtags = await request(server).get('/api/hashtag')

    expect(deleteHashtag.statusCode).toBe(200)
    expect(deleteHashtag.body.hashtag).toBe('foobar')
    expect(deleteHashtag.body.active).toBe(false)
    expect(deleteHashtag.body.count).toBe(1)
    expect(getHashtags.statusCode).toBe(200)
    expect(getHashtags.body.length).toBe(0)
  })

  test('should recreate the #foobar hashtag', async () => {
    const createHashtag = await request(server)
      .post('/api/hashtag')
      .send({ hashtag: 'foobar' })
    const getHashtags = await request(server).get('/api/hashtag')

    expect(createHashtag.statusCode).toBe(200)
    expect(createHashtag.body.hashtag).toBe('foobar')
    expect(createHashtag.body.active).toBe(true)
    expect(createHashtag.body.count).toBe(2)
    expect(getHashtags.statusCode).toBe(200)
    expect(getHashtags.body.length).toBe(1)
  })

  test('should search the #foobar hashtag', async () => {
    const getHashtag = await request(server).get('/api/hashtag/foobar')

    expect(getHashtag.statusCode).toBe(200)
    expect(getHashtag.body.hashtag).toBe('foobar')
    expect(getHashtag.body.active).toBe(true)
    expect(getHashtag.body.count).toBe(2)
  })

  test('should delete an inexistent hashtag', async () => {
    const deleteHashtag = await request(server).delete('/api/hashtag/barfoo')

    expect(deleteHashtag.statusCode).toBe(404)
    expect(deleteHashtag.error.text).toBe("Hashtag doesn't exists")
  })

  test('should search an inexistent hashtag', async () => {
    const getHashtag = await request(server).get('/api/hashtag/barfoo')

    expect(getHashtag.statusCode).toBe(404)
    expect(getHashtag.error.text).toBe("Hashtag doesn't exists")
  })
})
