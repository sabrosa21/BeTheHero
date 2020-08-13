const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    // Get the total count of all incidents
    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      // Makes the join with table ONGS
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      // Gets only 5 results per page
      .limit(5)
      // Once the page starts at 1 we need to initially * by 0 to start getting the first 5 incidents
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ]);

    // Send the total count in the header
    response.header("X-Total-Count", count["count(*)"]);

    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    // gets the id of the incident
    const { id } = request.params;
    // gets the ONG id that makes the request
    const ong_id = request.headers.authorization;

    // Select the first incident that corresponds to request ID
    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    // Checks if incident ONG ID bellongs to the requested ONG ID
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "Operation not allowed." });
    }

    // Delete the incident
    await connection("incidents").where("id", id).delete();

    // Sends a no data response
    return response.status(204).send();
  },
};
