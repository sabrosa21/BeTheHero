const knex = require("knex");
const configuration = require("../../knexfile");

// Environment variables for testing environment connection
const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

// To call the development method inside the knexfile.js
const connection = knex(config);

module.exports = connection;
