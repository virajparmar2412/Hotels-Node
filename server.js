const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db"); // MongoDB connection
const personRoutes = require("./routes/personRoutes"); // Person router
const menuRoutes = require("./routes/menuRoutes"); // Menu router

// Middleware
app.use(express.json()); // Parse JSON bodies (replaces body-parser)

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello", (req, res) => {
  res.send("Hello Its Second Page");
});

app.post("/drink", (req, res) => {
  res.send("Data is stored");
});

app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
