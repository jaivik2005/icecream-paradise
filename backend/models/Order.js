const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  items: [{
    name: String,
    quantity: Number,
    price: Number
  }],
  total: Number,
  status: { type: String, default: "Pending", index: true },
  date: { type: Date, default: Date.now, index: true }
});

module.exports = mongoose.model("Order", OrderSchema);
