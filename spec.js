var test = require('tape')
var request = require('supertest')
var app = require('./app.js')

test('404', function (assert) {
  request(app)
    .get('/foo')
    .expect(404)
    .end(function (err, res) {
      assert.error(err, 'No error')
      assert.end()
    })
})