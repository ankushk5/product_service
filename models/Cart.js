const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  productName: String,
  productDescription: String,
  productPrice: Number,
});

module.exports = mongoose.model("Cart", CartSchema);
