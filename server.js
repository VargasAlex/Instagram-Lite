// start boilerplate code
const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const Post = require(".models/post")

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.listen(port, function () {
  console.log(`Listening on port ${port}`)
});
// end boilerplate code

// begin routes for the app
app.get("/", function (request, response) {

});
