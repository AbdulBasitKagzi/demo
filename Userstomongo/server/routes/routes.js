const express = require("express");
const cookieParser = require("cookie-parser");
const app = require("../server");
const { signup, getusers } = require("../controller/userReq");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).send("Server is there...");
});
routes.get("/getusers", getusers);

// setting up cookie
// routes.get("/setcookie", (req, res) => {
//   // res.setHeader("set-cookie", "newUser=true");
//   // creating cookie with the help of cookie parser
//   // first argument is cookie name and second is value third object is to set cookie properties like age(the amount of time cookie lives) of cookie, secure the cookie,etc.
//   res.cookie("newUser", false, { maxAge: 1000 * 60 * 60 * 24 });
//   res.send("You got the cookie");
// });
// routes.get("/getcookie", (req, res) => {
//   let cookies = req.cookies;
//   console.log(cookies);
//   res.json(cookies);
// });

routes.post("/signup", signup);
module.exports = routes;
