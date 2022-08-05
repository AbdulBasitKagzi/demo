const express = require("express");
const { signup } = require("../controller/userReq");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).send("Server is there...");
});
routes.post("/signup", signup);
module.exports = routes;
