const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  brand: String,
  price: Number,
  image: String
});

const item = mongoose.model("items", itemSchema);

module.exports = item;
