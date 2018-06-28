// start boilerplate code
const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const Post = require("./models/post")
const User = require("./models/user")
const moment = require("moment")

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.set("view engine", "ejs")
app.listen(port, function () {
  console.log(`Listening on port ${port}`)
});
// end boilerplate code

// begin routes for the app
app.get("/",  (request, response) => {

});

app.post("/posts", (request, response) => {
  const newPost = request.body;
  newPost.published_at = new Date ();
  Post.create(newPost)
    .then(post => {
      // response.render("/posts/show")
      console.log(post)
    })
})

app.get("/posts/:id", (request, response) => {
  const id = Number(request.params.id)
  Post.findById(id)
    .then(post => {
      post.published_at = moment(post.published_at).startOf('hours').fromNow()
      // response.render("posts/show", {post: post})
      return post
    }) .then (post => {
        User.findById(post.user_id)
          .then(user => {
            post.user_name = user.name
            response.render("posts/show", { post: post })
          })
    })
})

