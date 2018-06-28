// start boilerplate code
const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const Post = require("./models/post")
const User = require("./models/user")
const moment = require("moment")
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.use(methodOverride('_method'))
app.set("view engine", "ejs")
app.listen(port, function () {
  console.log(`Listening on port ${port}`)
});
// end boilerplate code

// begin routes for the app
app.get("/",  (request, response) => {
  Post.all()
    .then(posts => {
      // console.log('this is posts:', posts);
      // let newArr = posts.map(post => {
      //   return moment....
      // })
      response.render('posts/homepage', {posts: posts})
    })
});

app.get("/posts/new", (request, response) => {
  User.all()
    .then(users => {
      response.render('posts/new', {users: users})
    })
});

app.get('/posts/:id/edit', (request, response) => {
  const id = Number(request.params.id)
  Promise.all ([
    Post.findById(id)
      .then(post => {
        post.published_at = moment(post.published_at).startOf('hours').fromNow()
        return post
      }),
      User.all()
        .then(users => {
          return users
        })
  ])
  .then(([post, users]) => {
    response.render('posts/edit', {post: post, users: users})
  })
});

app.put('/posts/:id', (request, response) => {
  const updatePost = request.body
  updatePost.id = request.params.id
  Post.update(updatePost)
    .then(post => {
      response.redirect(302, `/posts/${post.id}`)
    })
})

app.delete('/posts/:id', (request, response) => {
  const id = Number(request.params.id)
  Post.delete(id)
    .then(post => {
      response.redirect(302, '/')
    })
});

app.post("/posts", (request, response) => {
  const newPost = request.body;
  newPost.published_at = new Date ();
  Post.create(newPost)
    .then(post => {
      response.redirect(302, `/posts/${post.id}`)
      console.log(post)
    })
})

app.get("/posts/:id", (request, response) => {
  const id = Number(request.params.id)
  Post.findById(id)
    .then(post => {
      console.log('this is post in findbyid:', post);
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



