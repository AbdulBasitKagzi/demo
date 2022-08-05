const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowerCase: true,
    validate: [isEmail, "Enter valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should be of 6 or more characters"],
  },
});
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
const Users = mongoose.model("user", userSchema);
module.exports = Users;
