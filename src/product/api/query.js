const {
  getProductByIdLogic,
  getAllProductsLogic,
  getMultipleProductsLogic,
  getProductsBySearchTextLogic,
} = require("../logic/logic");

const getAllProducts = () => {
  return getAllProductsLogic();
};

const getProductById = (parent, args, context, info) => {
  return getProductByIdLogic(parent, args, context, info);
};

/**
 * This will search the product from Product Name
 * Partial matching won't work.
 * If any single word from searchText matches any Single Word in Product model then there
 * will an match
 */
const getProductsBySearchText = (parent, args, context, info) => {
  return getProductsBySearchTextLogic(parent, args, context, info);
};

const getMultipleProducts = (parent, args, context, info) => {
  return getMultipleProductsLogic(parent, args, context, info);
};

const ProductQuery = {
  getAllProducts: getAllProducts,
  getProductById: getProductById,
  getProductsBySearchText: getProductsBySearchText,
  getMultipleProducts: getMultipleProducts,
};
module.exports = { ProductQuery };
