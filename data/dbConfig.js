const knex = require("knex");
const environment = process.env.NODE_ENV || "development";
console.log(environment);
const configOptions = require("../knexfile")[environment];

module.exports = knex(configOptions);
