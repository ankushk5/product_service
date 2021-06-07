const {
  addProductLogic,
  addReviewLogic,
  addToCartLogic,
} = require("../logic/logic");

const addProduct = (parent, args, context, info) => {
  return addProductLogic(parent, args, context, info);
};

const addReview = async (parent, args, context, info) => {
  const updatedProduct = addReviewLogic(parent, args, context, info);
  return updatedProduct;
};

const addToCart = async (parent, args, context, info) => {
  return addToCartLogic(parent, args, context, info);
};

module.exports = { addProduct, addReview, addToCart };
