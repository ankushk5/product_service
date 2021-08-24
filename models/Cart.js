const mongoose = require("mongoose");
const Products = require("./Products");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  customerId: String,
  productData: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },

  quantity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
