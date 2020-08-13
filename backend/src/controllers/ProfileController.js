// According to the MVC best practices we should have only 4 to 5 different methods per controller
// so we will create a new controller to get the specific ONG incidents

const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(incidents);
  },
};
