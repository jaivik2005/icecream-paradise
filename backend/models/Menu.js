const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: { type: String, index: true },
  image: String
});

module.exports = mongoose.model("Menu", MenuSchema);
