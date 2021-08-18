const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: String,
  productDescription: String,
  productPrice: Number,
  productCategory: {
    categoryId: Number,
    categoryName: String,
  },
  productSubCategory: String,
  productBrand: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
