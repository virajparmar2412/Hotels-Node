const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = process.env.MONGODB_URL;
const mongoURL = process.env.MONGODB_URL_LOCAL;
console.log("MONGODB_URL:", mongoURL); // More descriptive log

if (!mongoURL) {
  console.error("Error: MONGODB_URL is not defined in .env file");
  process.exit(1); // Exit if the URI is missing
}


mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

db.on("error", (err) => {
  console.error("MongoDB connection error event:", err.message);
});

module.exports = db;
