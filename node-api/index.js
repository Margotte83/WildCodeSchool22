const express = require("express");
const app = express();
require("./models/dbConfig").default;
require("dotenv");

const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use("/posts", postsRoutes);

// connect to server
app.listen(5500, () => console.log("Server started: 5500"));
