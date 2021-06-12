const {
  addProductLogic,
  addReviewLogic,
  updateProductLogic,
  deleteProductLogic,
} = require("../logic/logic");

const addProduct = async (parent, args, context, info) => {
  return addProductLogic(parent, args, context, info);
};

const updateProduct = async (parent, args, context, info) => {
  return updateProductLogic(parent, args, context, info);
};

const deleteProduct = async (parent, args, context, info) => {
  return deleteProductLogic(parent, args, context, info);
};

const addReview = async (parent, args, context, info) => {
  const updatedProduct = addReviewLogic(parent, args, context, info);
  return updatedProduct;
};

const ProductMutation = {
  addProduct,
  updateProduct,
  deleteProduct,
  addReview,
};

module.exports = { ProductMutation };
