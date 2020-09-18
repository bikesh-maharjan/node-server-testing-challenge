const db = require("../knexConfig");

function add(item) {
  db("foods")
    .insert(item)
    .then((id) => {
      return findById(id[0]);
    })
    .catch((err) => {
      return err;
    });
}

function remove(id) {
  return db("foods").where({ id }).del();
}

function findById(id) {
  return db("foods").where({ id }).first();
}

module.exports = { add, remove };
