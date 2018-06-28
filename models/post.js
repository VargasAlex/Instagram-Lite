const db = require('../db/connection');

const Post = {};

Post.create = post => {
return db.one(
  "INSERT INTO posts (user_id, photo_url, description, published_at) VALUES (${user_id}, ${photo_url}, ${description}, ${published_at}) RETURNING *", post)
};

Post.findById = id => {
  return db.one (
    "SELECT * FROM posts JOIN users ON users.id = posts.user_id WHERE users.id = ${id}", {id : id}
  )
    // ("JOIN users WHERE users.id = posts.user_id")
  // join on users where user_id = id
};

module.exports = Post;
