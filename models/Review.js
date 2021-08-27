const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  productID: { type: Schema.Types.ObjectId },
  customerId: String,
  review: String,
  rating: Number,
});

module.exports = mongoose.model("Review", ReviewSchema);
