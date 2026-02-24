const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

router.get("/", async (req, res) => {
  const menu = await Menu.find();
  res.json(menu);
});

router.post("/", async (req, res) => {
  const item = new Menu(req.body);
  await item.save();
  res.send("Menu Item Added");
});

module.exports = router;
