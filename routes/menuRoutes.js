const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new Menu(data);
    const response = await newMenu.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:foodType", async (req, res) => {
  try {
    const foodType = req.params.foodType;
    if (
      foodType == "appetizer" ||
      foodType == "main course" ||
      foodType == "dessert" ||
      foodType == "beverage"
    ) {
      const response = await Menu.find({ category: foodType });
      console.log("Data Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Food type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const foodId = req.params.id;
    const updatedFoodData = req.body;

    const response = await Menu.findByIdAndUpdate(foodId, updatedFoodData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "Food item Not Found" });
    }

    console.log("Data Updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const foodId = req.params.id;
    const response = await Menu.findByIdAndDelete(foodId);

    if (!response) {
      console.log("Item not Found");
      res.status(400).json({ error: "Item not found" });
    }

    console.log("Item deleted");
    res.status(200).json(response);
  } catch {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
