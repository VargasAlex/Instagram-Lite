const db = require('../db/connection');

const Post = {};

Post.all = post => {
  return db.any(
    "SELECT posts.id AS post_id, posts.user_id AS user_id, posts.photo_url, posts.description, posts.published_at, users.img_url AS img_url FROM posts JOIN users ON users.id = posts.user_id"
  )
};

Post.create = post => {
return db.one(
  "INSERT INTO posts (user_id, photo_url, description, published_at) VALUES (${user_id}, ${photo_url}, ${description}, ${published_at}) RETURNING *", post)
};

Post.findById = id => {
  return db.one (
    "SELECT posts.id AS post_id, posts.user_id AS user_id, posts.photo_url, posts.description, posts.published_at, users.img_url AS img_url FROM posts JOIN users ON users.id = posts.user_id WHERE posts.id = ${id}", {id : id}
  )
};

Post.update = post => {
  return db.one(
    "UPDATE posts SET user_id = ${user_id}, photo_url = ${photo_url}, description = ${description} WHERE posts.id = ${id} RETURNING *", post)
};

Post.delete = id => {
  return db.result(
    "DELETE FROM posts WHERE id = ${id}", {id: id}
  )
};

module.exports = Post;
