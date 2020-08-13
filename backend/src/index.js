const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// Determines who can access the application. It's a security module
app.use(cors());
// Convert the json information to JS
app.use(express.json());
// The routes needs to be placed bellow the line above
app.use(routes);

app.listen(3333);
