// import db from "./db";
// import express from "express";
// const app = express();
// const db = require("./db");

const express = require("express");
const app = express();
const db = require("./db.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// console.log("Database module loaded, readyState:", db.readyState);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello", (req, res) => {
  res.send("Hello Its Second Page");
});

app.post("/drink", (req, res) => {
  res.send("Data is stored");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

app.listen(3000, () => console.log("listening to port 3000"));
