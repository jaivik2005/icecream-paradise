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
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
