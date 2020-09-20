//To create random text to use for the ID. It's node native
const crypto = require("crypto");

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString("HEX");
};
