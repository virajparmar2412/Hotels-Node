const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db"); // MongoDB connection
const personRoutes = require("./routes/personRoutes"); // Person router
const menuRoutes = require("./routes/menuRoutes"); // Menu router
const passport = require("./auth");

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(passport.initialize());

// Define logRequest before using it
const logRequest = (req, res, next) => {
  console.log("Middleware triggered"); // Test log
  console.log(
    `[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`
  );
  next();
};


app.use(logRequest);

const localAuthMiddleware = passport.authenticate("local", { session: false });
app.use(localAuthMiddleware);

// Routes
app.get("/", function (req, res) {
  res.send("Hello World");
});
// Add a failure route for authentication errors
app.get("/login-failure", (req, res) => {
  res.status(401).send("Authentication failed");
});

app.get("/hello", (req, res) => {
  res.send("Hello Its Second Page");
});

app.post("/drink", (req, res) => {
  res.send("Data is stored");
});

app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

// Start server only after MongoDB is connected
db.once("open", () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
    console.log("Server started at", new Date().toLocaleString());
  });
});
