const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: String,
  productDescription: String,
  productPrice: Number,
  reviews: [
    {
      review: String,
      rating: Number,
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
