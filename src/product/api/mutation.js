const { addProductLogic, addReviewLogic } = require("../logic/logic");

const addProduct = async (parent, args, context, info) => {
  return addProductLogic(parent, args, context, info);
};

const addReview = async (parent, args, context, info) => {
  const updatedProduct = addReviewLogic(parent, args, context, info);
  return updatedProduct;
};

const ProductMutation = {
  addReview,
  addProduct,
};

module.exports = { ProductMutation };
