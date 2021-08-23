const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  vendorId: String,
  productName: String,
  productDescription: String,
  productPrice: Number,
  productCategory: {
    categoryId: Number,
    categoryName: String,
  },
  productSubCategory: String,
  productBrand: String,
  productImageUrl: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
