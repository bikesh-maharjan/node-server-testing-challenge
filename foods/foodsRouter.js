const express = require("express");

const Foods = require("./foodsModel");
const db = require("../knexConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

router.post("/", (req, res) => {
  db.add(req.body)
    .then((food) => {
      if (food.length) {
        res.status(201).json(food).end();
      } else {
        res.status(400).json({ message: "Request is bad" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.delete("/:id", (req, res) => {
  db.removeAllListeners(req.params.id)
    .then((num) => {
      if (num === 1) {
        res.status(204).json({ message: "It is deleted" }).end();
      } else {
        res.status(404).json({ message: "file not found" }).end();
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Error" }).end();
    });
});

module.exports = router;
