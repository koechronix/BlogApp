const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://app:app123@cluster0.fthlpzj.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(console.log("Connected to Database and listening to localhost 5000"))
  .catch((err) => console.log(err));

  app.listen("5000", () => {
    console.log("Backend is running successfully.");
  });