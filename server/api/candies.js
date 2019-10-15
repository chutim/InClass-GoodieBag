"use strict";

const router = require("express").Router();
const Candy = require("../db/models/Candy");

router.get("/", async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.send(candies);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const candy = await Candy.findById(req.params.id);
    res.send(candy);
  } catch (error) {
    next(error);
  }
});

router.put("/:id/increase", async (req, res, next) => {
  try {
    const candy = await Candy.findById(req.params.id);
    candy.quantity++;
    await candy.save();
    res.send(candy);
  } catch (error) {
    next(error);
  }
});

router.put("/:id/decrease", async (req, res, next) => {
  try {
    const candy = await Candy.findById(req.params.id);
    candy.quantity--;
    await candy.save();
    res.send(candy);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
