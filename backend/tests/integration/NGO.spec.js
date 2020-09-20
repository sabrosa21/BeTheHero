const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("NGO", () => {
  beforeEach(async () => {
    // Clean the BD
    await connection.migrate.rollback();
    // Create the data inside Test BD
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new NGO", async () => {
    const response = await request(app).post("/ongs").send({
      name: "APAD2",
      email: "contact@test.com",
      whatsapp: "999999999",
      city: "Aveiro",
      uf: "AV",
    });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
