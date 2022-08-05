const Users = require("../model/Users.model");
const validator = require("validator");

function handleError(err) {
  console.log(err.message);
}
async function signup(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const users = await Users.create({ email, password });
    return res.status(200).json(users);
  } catch (err) {
    handleError(err);
    return res.status(400).send("User not created");
  }
}
module.exports = { signup };
