const {
  getProductByIdLogic,
  getAllProductsLogic,
  getMultipleProductsLogic,
} = require("../logic/logic");

const getAllProducts = () => {
  return getAllProductsLogic();
};

const getProductById = (parent, args, context, info) => {
  return getProductByIdLogic(parent, args, context, info);
};

const getMultipleProducts = (parent, args, context, info) => {
  return getMultipleProductsLogic(parent, args, context, info);
};

const ProductQuery = {
  getAllProducts: getAllProducts,
  getProductById: getProductById,
  getMultipleProducts: getMultipleProducts,
};
module.exports = { ProductQuery };
