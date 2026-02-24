const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { tableNumber, items, total } = req.body;
    const order = new Order({ tableNumber, items, total });
    await order.save();
    res.status(201).json({ message: "Order Placed", order });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
});

router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ date: -1 });
  res.json(orders);
});

router.put("/:id", async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, { status: "Completed" });
  res.send("Order Completed");
});

module.exports = router;

