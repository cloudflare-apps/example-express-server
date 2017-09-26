var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var jsonFetch = require("simple-json-fetch")
var PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/', function(request, response) {
  // Your install options will be accessable at request.body.install
  // For more information on what the install object will look like, check
  // the request secion of https://www.cloudflare.com/apps/developer/docs/webhooks
  
})

app.listen(PORT, function() {
  console.log("running on port " + PORT)
})