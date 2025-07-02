const mongoose = require("mongoose");
const { type } = require("os");

const menuSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["appetizer", "main course", "dessert", "beverage"],
    required: true,
  },
  description: {
    type: String,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  isDrink: {
    type: Boolean,
    default: false, // Default to false, assuming most items are not drinks
  },
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
