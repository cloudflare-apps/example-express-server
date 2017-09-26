var request = require('supertest')
describe('loading express', function () {
  var server
  beforeEach(function () {
    server = require('./app.js')
  })
  afterEach(function () {
    server.close()
  })
  it('404s unset url', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done)
  })
})