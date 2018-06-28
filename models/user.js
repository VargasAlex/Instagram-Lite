const db = require('../db/connection');

const User = {};

User.findById = id => {
  return db.one(
    "SELECT * FROM users WHERE id = ${id}", {id: id}
  )
};

module.exports = User
