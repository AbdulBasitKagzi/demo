const express = require("express");
const mongoose = require("mongoose");

const router = require("../server/routes/routes");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(router);
// setting up cookie parser as middleware
app.use(cookieParser());

mongoose.connection.once("open", () => {
  console.log("server connected");
});
mongoose.connection.on("error", (err) => {
  console.log("error", err);
});
mongoose
  .connect("mongodb://localhost:27017/Monogusers", {
    useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,()
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
