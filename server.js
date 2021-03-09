const express = require("express");
const cors = require("cors");
// Mongoose
const mongoose = require("mongoose");

// Environment variables
require("dotenv").config();

// Server
const app = express();
const port = process.env.PORT || 5000;

// Middleware & Mongoose connection to MongoDB
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Databasase connection established successfully");
});

// Route for posting a test object
const testObjectRouter = require("./routes/testObject");
app.use("/testObject", testObjectRouter);

// Server initialization
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
