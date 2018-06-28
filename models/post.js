const db = require('../db/connection');

const Post = {};

Post.create = post => {
return db.one(
  "INSERT INTO posts (user_id, photo_url, description, published_at) VALUES (${user_id}, ${photo_url}, ${description}, ${published_at}) RETURNING *", post)
};

Post.findById = id => {
  return db.one (
    "SELECT * FROM posts WHERE id = ${id}", {id : id}
  )
};

module.exports = Post;
