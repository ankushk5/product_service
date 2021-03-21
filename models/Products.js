const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: String,
  productDescription: String,
  productPrice: Number,
});

module.exports = mongoose.model("Product", ProductSchema);
