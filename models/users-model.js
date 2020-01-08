const db = require("../data/dbConfig.js");

const get = () => {
  return db("users");
};

const getById = id => {
  return db("users")
    .where({ id })
    .first();
};

const getByUsername = username => {
  return db("users")
    .where({ username })
    .first();
};

const insert = newUser => {
  return db("users")
    .insert(newUser, "id")
    .then(id => {
      return getById(id[0]); // should I be returning the whole user here?
    });
};

const update = (id, updates) => {
  return db("users")
    .where({ id })
    .update(updates);
};

const remove = id => {
  return db("users")
    .where("id", id)
    .del();
};

module.exports = {
  get,
  getById,
  getByUsername,
  insert,
  update,
  remove
};
