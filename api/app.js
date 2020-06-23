const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors());

const authRoute = require("./routes/auth");

const mongoDB =
  "mongodb+srv://ranoliadb:manish9733@cluster0-bvyxf.mongodb.net/ranoliacrm?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use("/auth", authRoute);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// listen for requests
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
