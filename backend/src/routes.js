const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

// Just for testing
routes.get("/ongs", OngController.index);

// Abstracted the route from the controllers
// Create an ONG
routes.post("/ongs", OngController.create);

// Select all Incident
routes.get("/incidents", IncidentController.index);
// Create an Incident
routes.post("/incidents", IncidentController.create);

// Delete an incident
routes.delete("/incidents/:id", IncidentController.delete);

// Get the specified ONG incidents
routes.get("/profile", ProfileController.index);

//Exports the routes to be able to use it in another files
module.exports = routes;
