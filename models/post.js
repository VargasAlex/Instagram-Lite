const db = require('../db/connection')

const Post = {}

Post.create = post => {
return db.one(
  "INSERT INTO posts (user_id, photo_url, description, published_at) VALUES (${user_id}, ${photo_url}, ${description}, ${published_at}) RETURNING *", post)
};

module.exports = Post
