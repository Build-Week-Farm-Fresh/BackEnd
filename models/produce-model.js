const db = require("../data/dbConfig.js");

const getByFarmer = farmer_id => {
  return db("produce").where({ farmer_id: farmer_id });
};

const getById = id => {
  return db("produce")
    .where({ id })
    .first();
};

const insert = newProduce => {
  return db("produce")
    .insert(newProduce, "id")
    .then(id => {
      return getById(id[0]);
    });
};

const update = (id, updates) => {
  return db("produce")
    .where({ id })
    .update(updates);
};

const remove = id => {
  return db("produce")
    .where("id", id)
    .del();
};

module.exports = {
  getByFarmer,
  getById,
  insert,
  update,
  remove
};
