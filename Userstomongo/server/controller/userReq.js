const Users = require("../model/Users.model");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

function handleError(err) {
  console.log(err.message);
}

// function to create json web token
const createToken = (id) => {
  // first arg is payload:data and second is secret
  return jwt.sign({ id }, "abdulbasit's secret key");
};

async function signup(req, res) {
  const { email, password } = req.body;
  console.log("afdf", req.body);

  try {
    const users = await Users.create({ email, password });
    console.log("users", users.email);

    const token = createToken(users._id);

    res.cookie("jwt", token, { maxAge: 1000 * 24 * 24 * 60 });
    return res.status(200).json({ users, token: token });
  } catch (err) {
    handleError(err);
    return res.status(400).send("User not created");
  }
}
async function getusers(req, res) {
  const newuser = await Users.find();
  return res.status(201).send(newuser);
}
module.exports = { signup, getusers };
