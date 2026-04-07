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
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status: "Completed" }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    
    res.json({ message: "Order Completed", order: updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: "Failed to update order" });
  }
});

module.exports = router;
