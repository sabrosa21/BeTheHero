const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");

module.exports = {
  // To List all the ONGS
  async index(request, response) {
    // Select all the ongs in the table ongs
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  // To create an NGO
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    // Creates the ID
    const id = generateUniqueId();
    // Inserts the data in DB
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  },
};
