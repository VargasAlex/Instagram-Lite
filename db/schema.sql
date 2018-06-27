CREATE DATABASE instagramlite;

\c instagramlite

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  photo_url TEXT,
  description TEXT,
  published_at TIMESTAMP
);
