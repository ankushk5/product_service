const {
  addProductLogic,
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

const ProductMutation = {
  addProduct,
  updateProduct,
  deleteProduct,
};

module.exports = { ProductMutation };
