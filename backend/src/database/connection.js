const knex = require("knex");
const configuration = require("../../knexfile");

// To call the development method inside the knexfile.js
const connection = knex(configuration.development);

module.exports = connection;
