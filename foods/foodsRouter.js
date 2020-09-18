const express = require("express");

const Foods = require("./foodsModel");

const router = express.Router();

router.get("/", (req, res) => {
  Foods.getFoods()
    .then((food) => {
      res.status(200).json(food);
    })
    .catch((error) => {
      res.status(500).json({ error: "internal server error" });
    });
});
