CREATE DATABASE instagramlite;

\c instagramlite

DROP TABLE if exists users cascade;
DROP TABLE if exists posts cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  img_url TEXT
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  photo_url TEXT,
  description TEXT,
  published_at TIMESTAMP
);
