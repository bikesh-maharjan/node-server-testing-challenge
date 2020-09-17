const express = require("express");

const server = express();

const foodsRouter = require("../foods/foodsRouter");

server.use(express.json());

server.use("/api/foods", foodsRouter);

module.exports = server;
