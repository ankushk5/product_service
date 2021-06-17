const { getProductByIdLogic, getAllProductsLogic } = require("../logic/logic");

const getAllProducts = () => {
  return getAllProductsLogic();
};

const getProductById = (parent, args, context, info) => {
  return getProductByIdLogic(parent, args, context, info);
};

const ProductQuery = {
  getAllProducts: getAllProducts,
  getProductById: getProductById,
};
module.exports = { ProductQuery };
