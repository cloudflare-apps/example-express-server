var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var simpleFetch = require('simple-fetch')
var PORT = process.env.PORT || 3000

app.use(bodyParser.json())

// Your install options will be accessable at request.body.install
// For more information on what the install object will look like, check
// the request secion of https://www.cloudflare.com/apps/developer/docs/webhooks
app.post('/', (request, response) => {
  console.log(JSON.stringify(request.body))
})

var server = app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`)
})

module.exports = server
